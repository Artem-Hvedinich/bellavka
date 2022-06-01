import React from 'react';
import styles from './ButtonBack.module.css'

export const ButtonBack = ({onClick}: {
    onClick: () => void
}) => {
    return (
        <div onClick={onClick} className={styles.arrow}/>
    );
};

