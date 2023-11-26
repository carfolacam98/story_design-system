import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

export const Input = ({ state, label, ...props }) => {
  const [focused, setFocused] = useState(false);
 

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const inputStateClass =
    state === 'error'
      ? styles.error
      : state === 'disabled'
      ? styles.disabled
      : focused
      ? styles.focused
      : styles.default;

  return (
    <div className={`${styles.inputContainer} ${inputStateClass}`}>
      <label>{label}</label>
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.input}
      />
    </div>
  );
};

Input.propTypes = {
  state: PropTypes.oneOf(['default', 'focused', 'error', 'disabled']),
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  state: 'default',
};

