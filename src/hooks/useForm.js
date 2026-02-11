import { useState } from "react";

const useForm = (initialValues, validate, onSubmit) => {
  const [ values, setValues ] = useState(initialValues);;
  const [ errors, setErrors ] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {...values, [ name ]: value};
    setErrors(validate(newValues));
    setValues(newValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      onSubmit(values);
      setValues(initialValues);
    }
  };

  return { errors, values, handleChange, handleSubmit }
}

export default useForm;