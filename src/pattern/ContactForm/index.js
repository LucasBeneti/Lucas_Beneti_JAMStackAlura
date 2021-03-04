import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Text } from '../../foundation/Text';
import { TextField } from '../../form/TextField';
import { Button } from '../../commons/Button';

const ContactFormWrapper = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 33vh;
  min-width: 33vw;
  height: 100%;
  width: 100%;

  background: white;
  border-radius: 0.5rem;
`;

ContactFormWrapper.Column = styled.div`
  display: flex;
  flex: 1;
`;

ContactFormWrapper.Box = styled.div`
  box-shadow: -10px 0px 24px rgba(7, 12, 14, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 85px;
  background-color: white;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 3rem 2rem 3rem;
`;

const ContactFormContent = ({ onSubmit }) => {
  const [contactMessage, setContactMessage] = useState({
    name: '',
    email: '',
    emailMessage: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setContactMessage({
      ...contactMessage,
      [fieldName]: event.target.value,
    });
  }

  useEffect(() => {
    console.log(contactMessage);
  }, [contactMessage]);

  return (
    <FormWrapper onSubmit={onSubmit}>
      <Text tag="h2" variant="titleXS" style={{ alignSelf: 'center' }}>
        Formulário de contato
      </Text>
      <TextField
        type="text"
        name="name"
        placeholder="Nome para contado"
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
      <Button type="submit" fullWidth>
        Enviar email
      </Button>
    </FormWrapper>
  );
};

export const ContactForm = ({ modalProps }) => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('form submitado');
  }

  return (
    <ContactFormWrapper {...modalProps}>
      <ContactFormContent onSubmit={handleSubmit} />
    </ContactFormWrapper>
  );
};
