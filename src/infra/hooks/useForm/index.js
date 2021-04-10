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
  const [formValues, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  //   const [touched, setTouchedFields] = useState([]);

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
    validateValues(formValues);
  }, [formValues]);
  //   console.log(`formValues`, formValues);

  return {
    formValues,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(formValues);
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
      return formValues[fieldName];
    },
    isFormDisabled,
    setIsFormDisabled,
    errors,
  };
}
