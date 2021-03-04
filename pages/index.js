import React, { useState } from 'react';
import { Footer } from '../src/commons/Footer';
import { MainContainer } from '../src/commons/MainContainer';
import { Modal } from '../src/commons/Modal';

import { CabecalhoWrapper } from '../src/commons/Cabecalho/styles/CabecalhoWrapper';
import { Logo } from '../src/theme/Icons/Logo';
import { Menu } from '../src/commons/Menu';
import { ContactForm } from '../src/commons/pattern/ContactForm';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const linksList = [
    {
      text: 'Sobre mim',
      url: '/about',
    },
    {
      text: 'Contato',
      url: '',
      onClick: setModalOpen,
    },
  ];

  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {(modalProps) => <ContactForm modalProps={modalProps} />}
      </Modal>

      <CabecalhoWrapper>
        <Logo width="5em" height="5em" color={({ theme }) => theme.svgIcons.primary} />
        <Menu linksList={linksList} />
      </CabecalhoWrapper>
      <MainContainer />
      <Footer />
    </div>
  );
}
