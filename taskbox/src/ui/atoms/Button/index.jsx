import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export const Button = ({ variant, size, label, href, ...props }) => {
  const mode = variant === 'primary' ? 'primary' : 'secondary';

  if (href) {
    return (
      <a
        href={href}
        className={[styles.button, `${styles[size]}`, styles[mode]].join(' ')}
        {...props}
      >
        {label}
      </a>
    );
  }

  
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
  href: PropTypes.string, 
};

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
  onClick: undefined,
  href: undefined,
};
