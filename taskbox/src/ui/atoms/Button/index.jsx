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
      <div className='button-content'>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M7.5876 6L1.7376 11.85L0.412598 10.525L4.9376 6L0.412597 1.475L1.7376 0.149998L7.5876 6Z" fill="#3A3A3A"/>
</svg>
</div>
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
