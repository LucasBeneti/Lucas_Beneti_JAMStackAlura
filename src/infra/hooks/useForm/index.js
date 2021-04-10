import { useEffect, useState } from 'react';

function formatErrors(yupErrors = []) {
  return yupErrors.reduce((errorObjectAcc, currError) => {
    const fieldName = currError.path;
    const errorMessage = currError.message;
    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState([]);

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors();
      setIsFormDisabled(false);
    } catch (error) {
      const formattedErrors = formatErrors(error.inner);
      setErrors(formattedErrors);
      setIsFormDisabled(true);
    }
  }
  useEffect(() => {
    validateValues(values);
  }, [values]);
  //   console.log(`values`, values);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      console.log(values);
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
    watch(fieldName) {
      return values[fieldName];
    },
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
  };
}
