// Componente Input
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

export const Input = ({ type, label, error, disabled, ...props }) => {
  const [focused, setFocused] = useState(false);
const {state}=props
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };



  return (
    <div className={`${styles.inputContainer}`}>
      <label>{label}</label>
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${styles.input} ${error ? styles.error : ''} ${styles[state]}`}
        disabled={disabled}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {

  error: false,
  disabled: false,
};
