import { useEffect, useState } from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormSidabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState([]);

  //   useEffect(() => {
  //     // validaValues
  //   }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    isFormSidabled,
    setIsFormDisabled,
    errors,
    touched,
  };
}
