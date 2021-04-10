/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Lottie } from '@crello/react-lottie';

import { Text } from '../../foundation/Text';
import { TextField } from '../../form/TextField';
import { Button } from '../../commons/Button';

import * as yup from 'yup';
import { useForm } from '../../infra/hooks/useForm';
import { contactService } from '../../services/contact/contactService';

import loadingAnim from './animations/loading.json';
import emailSuccess from './animations/email-sent.json';
import emailError from './animations/error-email.json';

import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const contactSchema = yup.object().shape({
  name: yup.string().required('Nome é obeigatório'),
  email: yup.string().required('Email é obeigatório'),
  emailMessage: yup.string().required('Mensagem é obeigatório'),
});

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  position: absolute;
  flex: 1;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;

  width: 100vw;
  ${breakpointsMedia({
    md: css`
      width: 50vw;
    `,
    xl: css`
      width: 35vw;
    `,
  })}
  padding: 0 3rem 2rem 3rem;
`;

export const ContactForm = ({ modalProps, onSubmit }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionState, setSubmissionState] = useState(formStates.DEFAULT);
  const initialContactMessage = {
    name: '',
    email: '',
    emailMessage: '',
  };

  const { watch, values, isFormDisabled, handleSubmit, handleChange, setIsFormDisabled } = useForm({
    initialValues: initialContactMessage,
    onSubmit: (values) => {
      setIsFormDisabled(true);
      setFormSubmitted(true);
      contactService
        .sendMessage({
          name: values.name,
          email: values.email,
          emailMessage: values.emailMessage,
        })
        .then((response) => {
          if (response.status === 200 || 201) {
            return response;
          }
          throw new Error('Deu ruim no envio dos dados!');
        })
        .then((data) => {
          setSubmissionState(formStates.DONE);
        })
        .catch((error) => {
          console.log('error', error);
          setSubmissionState(formStates.ERROR);
        })
        .finally(() => {
          setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return contactSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <ContactFormWrapper onSubmit={onSubmit || handleSubmit} {...modalProps}>
      {modalProps.CloseButton}
      <Text tag="h2" variant="titleXS" style={{ alignSelf: 'center' }}>
        Formulário de contato
      </Text>
      <TextField
        type="text"
        name="name"
        placeholder="Seu nome para contato"
        value={values.name}
        onChange={handleChange}
        autcomplete="off"
        color="black"
      />
      <TextField
        type="email"
        name="email"
        placeholder="Seu melhor email"
        value={values.email}
        onChange={handleChange}
        color="black"
      />
      <TextField
        type="text"
        tag="textarea"
        name="emailMessage"
        placeholder="Sua mensagem"
        value={values.emailMessage}
        onChange={handleChange}
        autcomplete="off"
        color="black"
        height="10rem"
      />
      <Button type="submit" disabled={isFormDisabled} fullWidth>
        Enviar email
      </Button>
      {formSubmitted && submissionState === formStates.LOADING && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '-8rem', paddingTop: '8rem' }}>
          <Lottie
            width="8rem"
            height="8rem"
            className="lottie-container basic"
            config={{
              animationData: loadingAnim,
              loop: true,
              autoplay: true,
            }}
          />
        </div>
      )}
      {formSubmitted && submissionState === formStates.DONE && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '-8rem', paddingTop: '8rem' }}>
          <Lottie
            width="8rem"
            height="8rem"
            className="lottie-container basic"
            config={{
              animationData: emailSuccess,
              loop: false,
              autoplay: true,
            }}
          />
        </div>
      )}
      {formSubmitted && submissionState === formStates.ERROR && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '-8rem', paddingTop: '8rem' }}>
          <Lottie
            width="8rem"
            height="8rem"
            className="lottie-container basic"
            config={{
              animationData: emailError,
              loop: false,
              autoplay: true,
            }}
          />
        </div>
      )}
    </ContactFormWrapper>
  );
};
