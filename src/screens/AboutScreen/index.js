import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const AboutScreenWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 10rem 0 10rem;

  ${breakpointsMedia({
    xl: css`
      transform: translateY(-20vh);
    `,
  })}
`;
AboutScreenWrapper.MainContainer = styled.div`
  display: flex;

  border-radius: 0.5em;
  background: ${({ theme }) => theme.background.terciary};
`;

AboutScreenWrapper.Avatar = styled.span`
  justify-self: center;
  align-self: center;
  width: auto;
  height: 100%;
  padding: 1rem;
  img {
    justify-self: center;
    align-self: center;
    border-radius: 100%;
    height: auto;
    width: 100%;
  }
`;

AboutScreenWrapper.Content = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 2rem 2rem 2rem 0;
`;

AboutScreenWrapper.Text = styled.article`
  justify-content: center;
`;

const AboutScreen = ({ reposData }) => {
  return (
    <AboutScreenWrapper>
      <AboutScreenWrapper.MainContainer>
        <AboutScreenWrapper.Avatar>
          <img src="images/lucasAvatar.jpeg" alt="uma imagem minha" />
        </AboutScreenWrapper.Avatar>
        <AboutScreenWrapper.Content>
          <Text tag="article" variant="subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta porta arcu, et pulvinar massa fermentum
            quis. Pellentesque bibendum metus a nibh pellentesque auctor. Nullam varius, odio nec facilisis ultricies,
            purus lacus accumsan elit, quis egestas dolor ligula sit amet velit. Aliquam tellus eros, lobortis ut nisl
            dignissim, dignissim mattis tortor. Mauris malesuada quam urna, eu porta lacus dictum non. Vestibulum et
            vestibulum purus, nec imperdiet nulla. Maecenas non est ligula. Nullam non tincidunt velit. Morbi sed mollis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta porta arcu, et pulvinar massa fermentum
            quis. Pellentesque bibendum metus a nibh pellentesque auctor. Nullam varius, odio nec facilisis ultricies,
            purus lacus accumsan elit, quis egestas dolor ligula sit amet velit. Aliquam tellus eros, lobortis ut nisl
            dignissim, dignissim mattis tortor. Mauris malesuada quam urna, eu porta lacus dictum non. Vestibulum et
            vestibulum purus, nec imperdiet nulla. Maecenas non est ligula. Nullam non tincidunt velit. Morbi sed mollis
            ultricies lacinia facilisis. Donec quis sem ut dui condimentum porta at id leo. Nulla ut augue urna.
          </Text>
          <Text tag="article" variant="subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta porta arcu, et pulvinar massa fermentum
            quis. Pellentesque bibendum metus a nibh pellentesque auctor. Nullam varius, odio nec facilisis ultricies,
            purus lacus accumsan elit, quis egestas dolor ligula sit amet velit. Aliquam tellus eros, lobortis ut nisl
            dignissim, dignissim mattis tortor. Mauris malesuada quam urna, eu porta lacus dictum non. Vestibulum et
            vestibulum purus, nec imperdiet nulla. Maecenas non est ligula. Nullam non tincidunt velit. Morbi sed mollis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta porta arcu, et pulvinar massa fermentum
            quis. Pellentesque bibendum metus a nibh pellentesque auctor. Nullam varius, odio nec facilisis ultricies,
            purus lacus accumsan elit, quis egestas dolor ligula sit amet velit. Aliquam tellus eros, lobortis ut nisl
            dignissim, dignissim mattis tortor. Mauris malesuada quam urna, eu porta lacus dictum non. Vestibulum et
            vestibulum purus, nec imperdiet nulla. Maecenas non est ligula. Nullam non tincidunt velit. Morbi sed mollis
            ultricies lacinia facilisis. Donec quis sem ut dui condimentum porta at id leo. Nulla ut augue urna.
          </Text>
        </AboutScreenWrapper.Content>
      </AboutScreenWrapper.MainContainer>
      <AboutScreenWrapper.MainContainer>
        <AboutScreenWrapper.Content>
          {reposData.map((repo) => (
            <Text href={repo.url}>{repo.name}</Text>
          ))}
        </AboutScreenWrapper.Content>
      </AboutScreenWrapper.MainContainer>
    </AboutScreenWrapper>
  );
};

export default AboutScreen;

AboutScreen.propTypes = {
  reposData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

// https://api.github.com/users/lucasbeneti/repos
// aqui terá o getStaticProps do projeto pra pegar os repos e listar eles...
// depois disso, eles serão listados e o usuário poderá visitar todos os repositórios
// que estiverem listados através dos esquemas de slugs (paginas dinamicas da aplicação)
