import React from 'react';
import styles from './List.module.scss'
import './List.css'

const List = ({number, name, symbol, mass, type}) => (
    <div className={styles.wrapper}>
        <div className={styles.box} id={type}>
            <p className={styles.number}>{number}</p>
            <p className={styles.symbol}>{symbol}</p>
            <p className={styles.name} >{name}</p>
            <p className={styles.mass}>{mass}</p>
        </div>
        <div className={styles.title}>
            {name}
        </div>
        
    </div>
);

export default List;
