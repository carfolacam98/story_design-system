import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export const Button = ({ variant, size, label, ...props }) => {
  const mode = variant === 'primary' ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={[styles.button, `${styles[size]}`, styles[mode]].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
  onClick: undefined,
};
