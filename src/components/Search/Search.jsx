import React from 'react';
import styles from './Search.module.css';

const Search = ({ type, placeholder, value, changeHandler }) => {

    return (

        <input
            type={type}
            placeholder={placeholder}
            className={styles.input}
            value={value}
            onChange={changeHandler}
        />

    );

};

export default Search;