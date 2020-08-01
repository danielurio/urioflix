import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function RegisterCategory() {
  const defaultValues = {
    title: "",
    description: "",
    color: "",
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }
  function handleChange(info) {
    const { name, value } = info.target;
    setValue(name, value);
  }

  useEffect(() => {
    fetch("https://urioflix-json-server.herokuapp.com/categories")
      .then(async (response) => {
        if (response.ok) {
          const r = await response.json();
          setCategories(r);
          return;
        }
        throw new Error("Couldn't get data");
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PageDefault>
      <h1>
        Register Category:
        {values.title}
      </h1>
      <form
        onSubmit={(info) => {
          info.preventDefault();
          setCategories([...categories, values]);
          setValues(defaultValues);
        }}
      >
        <FormField
          label="Category Name:"
          type="text"
          name="name"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          label="Category Description:"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Color:"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>Confirm</Button>
      </form>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.title}</li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default RegisterCategory;
