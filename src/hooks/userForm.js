import { useState } from 'react';

function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(info) {
    setValue(info.target.name, info.target.value);
  }

  const clearForm = () => {
    setValues(defaultValues);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
