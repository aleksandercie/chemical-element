import React from 'react';
import styles from './SearchBox.module.scss';


const SearchBox = (props) => (
    <div className={styles.wrapper}>
        <h1>chemical element</h1>
        <input onChange={props.handleInput} type="text" placeholder="Find your element"/> 
    </div>

);

export default SearchBox