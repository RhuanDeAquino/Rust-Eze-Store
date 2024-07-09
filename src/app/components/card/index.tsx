/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styles from './card.module.css';

export default function CardComponent({ name, price, image } :  any) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
      <img src={image} alt={name} width={200} height={100} />
      </div>
      <div className={styles.text}>
        <span>{name}</span>
        <p>{price}</p>
      </div>
    </div>
  );
}
