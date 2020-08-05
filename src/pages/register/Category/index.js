import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import userForm from '../../../hooks/userForm';
import categoriesRepository from '../../../repositories/categories';

function RegisterCategory() {
  const defaultValues = {
    id: 0,
    title: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const { values, handleChange, clearForm } = userForm(defaultValues);

  useEffect(() => {
    categoriesRepository.getAllCategories()
      .then((response) => { setCategories(response); })
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
          clearForm();
        }}
      >
        <FormField
          label="Category Name:"
          type="text"
          name="title"
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
      <table>
        <thead>
          <td>Title</td>
          <td>Description</td>
          <td>Color</td>
        </thead>
        {categories.map((category) => (
          <tr>
            <td>{category.title}</td>
            <td>{category.description}</td>
            <td>{category.color}</td>
          </tr>
        ))}
      </table>
    </PageDefault>
  );
}

export default RegisterCategory;
