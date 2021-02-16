import React from 'react';
// import styled from 'styled-components';
import { Cabecalho } from '../src/commons/Cabecalho';
import { Capa } from '../src/commons/Capa';
import { Footer } from '../src/commons/Footer';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        backgroundImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
        minHeight: '100vh',
      }}
    >
      <Capa />
      <Cabecalho />
      <Footer />
    </div>
  );
}
