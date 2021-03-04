import React from 'react';
import PropTypes from 'prop-types';

import { MenuWrapper } from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';

export const Menu = ({ linksList }) => (
  <MenuWrapper>
    {/* <MenuWrapper.Central>
        <Logo width="10rem" height="10rem" color={({ theme }) => theme.svgIcons.primary} />
      </MenuWrapper.Central> */}
    {/* <MenuWrapper.RightSide> */}
    {linksList.map((item) => (
      <li
        key={item.url}
        onClick={() => {
          if (item.onClick) {
            console.log('clicado');
            item.onClick(true);
          }
        }}
      >
        <Text tag="span">{item.text}</Text>
      </li>
    ))}
    {/* </MenuWrapper.RightSide> */}
  </MenuWrapper>
);

Menu.propTypes = {
  linksList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
