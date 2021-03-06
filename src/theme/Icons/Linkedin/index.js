import React from 'react';
import PropTypes from 'prop-types';

export const LinkedinIcon = ({ height, width, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 45.725 45.725">
    <path
      fill={color}
      d="M22.863,0A22.863,22.863,0,1,0,45.726,22.863,22.865,22.865,0,0,0,22.863,0ZM16.219,34.562H10.651V17.81h5.568ZM13.435,15.523H13.4a2.9,2.9,0,1,1,.073-5.788,2.9,2.9,0,1,1-.037,5.788ZM36.3,34.562H30.729V25.6c0-2.252-.806-3.788-2.821-3.788a3.048,3.048,0,0,0-2.857,2.036,3.813,3.813,0,0,0-.183,1.359v9.355H19.3s.073-15.18,0-16.752h5.568v2.372a5.528,5.528,0,0,1,5.018-2.765c3.663,0,6.41,2.394,6.41,7.54Zm0,0"
    />
  </svg>
);

LinkedinIcon.defaultProps = {
  color: '#FFF',
};

LinkedinIcon.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string,
};
