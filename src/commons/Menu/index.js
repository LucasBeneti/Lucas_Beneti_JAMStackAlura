import React from 'react';
import PropTypes from 'prop-types';

import { MenuWrapper } from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';
import { Logo } from '../../theme/Icons/Logo';

export const Menu = ({ linksList }) => (
  <MenuWrapper>
    {/* <MenuWrapper.Central>
        <Logo width="10rem" height="10rem" color={({ theme }) => theme.svgIcons.primary} />
      </MenuWrapper.Central> */}
    {/* <MenuWrapper.RightSide> */}
    {linksList.map((item) => (
      <li key={item.url}>
        <Text tag="a" href={item.url}>
          {item.text}
        </Text>
      </li>
    ))}
    {/* </MenuWrapper.RightSide> */}
  </MenuWrapper>
);

Menu.propTypes = {
  linksList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
