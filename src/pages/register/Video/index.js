import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/userForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm([]);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromApi) => { setCategories(categoriesFromApi); });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    videosRepository.create({
      title: values.title,
      url: values.url,
      categoryId: categories.find((category) => category.title === values.category).id,
    })
      .then(() => { history.push('/'); });
  };

  return (
    <PageDefault>
      <h1>Video Register:</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Video Title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Confirm
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/category">
        Category Register
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
