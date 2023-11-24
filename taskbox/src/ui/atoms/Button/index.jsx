import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={[styles.button, `${styles[size]}`, styles[mode]].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
