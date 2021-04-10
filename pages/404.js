import React from 'react';
import styled, { css } from 'styled-components';
import websitePageHOC from '../src/wrappers/WebSitePage/hoc';
import { breakpointsMedia } from '../src/theme/utils/breakpointsMedia';
import { Text } from '../src/foundation/Text';

const Page404Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem 10rem 0 10rem;

  ${breakpointsMedia({
    xl: css`
      transform: translateY(-20vh);
    `,
  })}
`;

Page404Wrapper.MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.background.terciary};
  /* width: auto; */
  padding: 1rem;
`;

Page404Wrapper.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  gap: 1.5rem;
`;

const Page404 = () => (
  <Page404Wrapper>
    <Page404Wrapper.MainContainer>
      <Page404Wrapper.Content>
        <Text tag="h1" variant="title" style={{ color: '#073615', fontSize: '10rem', margin: '0' }}>
          Error 404
        </Text>
        <Text tag="p" variant="subtext" style={{ fontSize: '1rem' }}>
          Não foi possível encontrar nenhum conteúdo nessa rota, por favor, dirijá-se à luz novamente, antes que seja
          tarde de mais.
        </Text>
      </Page404Wrapper.Content>
    </Page404Wrapper.MainContainer>
  </Page404Wrapper>
);

export default websitePageHOC(Page404);
