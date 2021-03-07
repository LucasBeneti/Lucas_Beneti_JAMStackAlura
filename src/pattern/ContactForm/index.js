import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Lottie } from '@crello/react-lottie';

import { Text } from '../../foundation/Text';
import { TextField } from '../../form/TextField';
import { Button } from '../../commons/Button';

import emailSuccess from './animations/email-sent.json';
import emailError from './animations/error-email.json';

import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

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

export const ContactForm = ({ modalProps }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionState, setSubmissionState] = useState(formStates.DEFAULT);
  const [contactMessage, setContactMessage] = useState({
    name: '',
    email: '',
    emailMessage: '',
  });
  const isFormValid = contactMessage.name === '' || contactMessage.email === '' || contactMessage.emailMessage === '';

  function checkBlankSpaces(objectToCheck) {
    const res = Object.values(objectToCheck)
      .map((value) => value.trim().length > 0)
      .filter((value) => value === false);
    return res.length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
    setSubmissionState(formStates.LOADING);
    if (contactMessage.email !== '' && contactMessage.name !== '' && contactMessage.emailMessage !== '') {
      if (checkBlankSpaces(contactMessage)) {
        const contactDTO = {
          name: contactMessage.name,
          email: contactMessage.email,
          message: contactMessage.emailMessage,
        };
        fetch('https://contact-form-api-jamstack.herokuapp.com/message ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            body: JSON.stringify(contactDTO),
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Deu ruim no envio dos dados!');
          })
          .then((data) => {
            setSubmissionState(formStates.DONE);
          })
          .catch((error) => {
            setSubmissionState(formStates.ERROR);
          });

        setSubmissionState(formStates.DONE);
      } else {
        setSubmissionState(formStates.ERROR);
      }
    }
  }
  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setContactMessage({
      ...contactMessage,
      [fieldName]: event.target.value,
    });
    setSubmissionState(formStates.DEFAULT);
  }

  return (
    <ContactFormWrapper onSubmit={handleSubmit} {...modalProps}>
      {modalProps.CloseButton}
      <Text tag="h2" variant="titleXS" style={{ alignSelf: 'center' }}>
        Formulário de contato
      </Text>
      <TextField
        type="text"
        name="name"
        placeholder="Seu nome para contato"
        value={contactMessage.name}
        onChange={handleChange}
        autcomplete="off"
        color="black"
      />
      <TextField
        type="email"
        name="email"
        placeholder="Seu melhor email"
        value={contactMessage.email}
        onChange={handleChange}
        color="black"
      />
      <TextField
        type="text"
        tag="textarea"
        name="emailMessage"
        placeholder="Sua mensagem"
        value={contactMessage.emailMessage}
        onChange={handleChange}
        autcomplete="off"
        color="black"
        height="10rem"
      />
      <Button type="submit" disabled={isFormValid} fullWidth>
        Enviar email
      </Button>
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
