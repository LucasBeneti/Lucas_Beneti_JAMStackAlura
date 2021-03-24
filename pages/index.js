import React, { useState } from 'react';
// import { Footer } from '../src/commons/Footer';
import { MainContainer } from '../src/commons/MainContainer';
import websitePageHOC from '../src/wrappers/WebSitePage/hoc';
// import { Modal } from '../src/commons/Modal';

// import { CabecalhoWrapper } from '../src/commons/Cabecalho/styles/CabecalhoWrapper';
// import { Logo } from '../src/theme/Icons/Logo';
// import { Menu } from '../src/commons/Menu';
// import { ContactForm } from '../src/pattern/ContactForm';

function Home() {
  // const [modalOpen, setModalOpen] = useState(false);

  // const linksList = [
  //   {
  //     text: 'Sobre mim',
  //     url: '/about',
  //   },
  //   {
  //     text: 'Contato',
  //     url: '',
  //     onClick: setModalOpen,
  //   },
  // ];

  return (
    <>
      <MainContainer />
    </>
  );
}

export default websitePageHOC(Home);
