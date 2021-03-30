import React from 'react';
import PropTypes from 'prop-types';

import { MenuWrapper } from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';

export const Menu = ({ linksList }) => (
  <MenuWrapper>
    {linksList.map((item) => (
      <li
        key={item.url}
        onClick={() => {
          if (item.onClick) {
            item.onClick(true);
          }
        }}
      >
        <Text tag="span" href={item.url}>
          {item.text}
        </Text>
      </li>
    ))}
  </MenuWrapper>
);

Menu.propTypes = {
  linksList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
