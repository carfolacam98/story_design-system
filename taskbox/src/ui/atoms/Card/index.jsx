import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';
import { Button } from '../Button'

export const Card = ({ hasButton, imageUrl, buttonText , buttonRedirect, children}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Card" className={styles.cardImage} />
      <div className={styles.cardContent}>
        {children}
      </div>
      {hasButton && (
        <Button
        href={buttonRedirect}
        label={buttonText}
        variant='primary'
        />

      )}
    </div>
  );
};

Card.propTypes = {
  hasButton: PropTypes.bool,
  imageUrl: PropTypes.string,
  buttonText: PropTypes.string,
};


