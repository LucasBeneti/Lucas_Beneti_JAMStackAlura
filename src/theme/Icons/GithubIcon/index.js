import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GithubIconWrapper = styled.span`
  svg {
    fill: ${({ color }) => color};
    transition: fill 0.2s;
  }

  svg:hover {
    fill: #211f1f;
  }
`;

export const GithubIcon = ({ height, width, color }) => (
  <GithubIconWrapper color={color}>
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 46.709 44.763">
      <path
        // fill={color}
        d="M23.354.5A23.152,23.152,0,0,0,0,23.45,22.988,22.988,0,0,0,15.969,45.224c1.168.216,1.6-.494,1.6-1.1,0-.545-.019-1.989-.029-3.9-6.5,1.384-7.867-3.079-7.867-3.079a6.118,6.118,0,0,0-2.6-3.357c-2.116-1.423.163-1.393.163-1.393a4.886,4.886,0,0,1,3.577,2.365c2.082,3.509,5.467,2.5,6.8,1.909a4.859,4.859,0,0,1,1.479-3.069c-5.187-.574-10.638-2.548-10.638-11.34a8.768,8.768,0,0,1,2.4-6.158,8.03,8.03,0,0,1,.2-6.074s1.956-.615,6.422,2.353a22.392,22.392,0,0,1,11.677,0c4.437-2.968,6.393-2.353,6.393-2.353a8.251,8.251,0,0,1,.234,6.074,8.8,8.8,0,0,1,2.394,6.158c0,8.816-5.459,10.757-10.655,11.321A5.445,5.445,0,0,1,29.1,37.82c0,3.071-.029,5.539-.029,6.284,0,.6.409,1.32,1.606,1.09A22.918,22.918,0,0,0,46.709,23.45,23.156,23.156,0,0,0,23.354.5Z"
        transform="translate(0 -0.5)"
      />
    </svg>
  </GithubIconWrapper>
);

GithubIcon.defaultProps = {
  color: '#FFF',
};

GithubIcon.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string,
};
