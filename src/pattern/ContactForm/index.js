import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Text } from '../../foundation/Text';
import { TextField } from '../../form/TextField';
import { Button } from '../../commons/Button';

import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

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
      width: 35vw;
    `,
  })}
  padding: 0 3rem 2rem 3rem;
`;

export const ContactForm = ({ modalProps }) => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('form submitado');
  }

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

  return (
    <ContactFormWrapper onSubmit={handleSubmit} {...modalProps}>
      {modalProps.CloseButton}
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
    </ContactFormWrapper>
  );
};
