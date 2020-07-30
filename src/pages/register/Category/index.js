import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function RegisterCategory() {
  let defaultValues = {
    name: "",
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

  return (
    <PageDefault>
      <h1>Register Category:{values.name}</h1>
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
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Category Description:"
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
        <button>Confirm</button>
      </form>
      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category.name}</li>;
        })}
      </ul>
    </PageDefault>
  );
}

export default RegisterCategory;
