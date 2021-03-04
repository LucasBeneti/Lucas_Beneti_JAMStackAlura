import React from 'react';
import styled, { css } from 'styled-components';

const ContactFormWrapper = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 33vh;
  min-width: 33vw;
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

const ContactFormContent = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      <input type="text" name="name" placeholder="Nome para contado" />
    </div>
    <div>
      <input type="email" name="email" placeholder="Seu melhor email" />
    </div>
    <button type="submit">Enviar email</button>
  </form>
);

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
