import React from 'react';
import PropTypes from 'prop-types';

import { MenuWrapper } from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';
import { Logo } from '../../theme/Icons/Logo';

export const Menu = ({ linksList }) => (
  <>
    <MenuWrapper>
      <MenuWrapper.Left>
        <Logo width="2.5em" height="2.5em" color={({ theme }) => theme.svgIcons.primary} />
      </MenuWrapper.Left>
      <MenuWrapper.Central>
        {linksList.map((item) => (
          <li key={item.url}>
            <Text tag="a" href={item.url}>
              {item.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
    </MenuWrapper>
  </>
);

Menu.propTypes = {
  linksList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
