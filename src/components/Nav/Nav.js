import React from 'react';
import styles from './Nav.module.css';

const Nav = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <div className={styles.dots}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.line}></div>
        </div>
    );
};

export default Nav;
