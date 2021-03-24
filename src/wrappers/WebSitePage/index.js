import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../../commons/Footer';
import { Menu } from '../../commons/Menu';
import { Modal } from '../../commons/Modal';
import { ContactForm } from '../../pattern/ContactForm';
import { CabecalhoWrapper } from '../../commons/Cabecalho/styles/CabecalhoWrapper';
import { Logo } from '../../theme/Icons/Logo';

export const WebSitepageContext = createContext({
  toggleContactForm: () => {},
});

const WebsitePageWrapper = ({ children }) => {
  const [isModalOpen, setModalState] = useState(false);

  const linksList = [
    {
      text: 'Sobre mim',
      url: '/about',
    },
    {
      text: 'Contato',
      url: '',
      onClick: setModalState,
    },
  ];

  return (
    <WebSitepageContext.Provider
      value={{
        teste: true,
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
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
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(modalProps) => <ContactForm modalProps={modalProps} />}
        </Modal>
        <CabecalhoWrapper>
          <Logo width="5em" height="5em" color={({ theme }) => theme.svgIcons.primary} />
          <Menu linksList={linksList} />
        </CabecalhoWrapper>
        {children}
        <Footer />
      </div>
    </WebSitepageContext.Provider>
  );
};

export default WebsitePageWrapper;

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
