import React from 'react';
import styles from './Top.module.css';
import Nav from '../Nav/Nav.js';

const Top = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left_wrapper}>
                <div className={styles.content}>
                    <h1 className={styles.hero_title}>Let's build something amazing</h1>
                    <p className={styles.hero_p}>Tjenna! My name's Henry, I'm a developer and a graphic designer. Welcome to my portfolio!</p>
                    <div className={styles.hero_button}>
                        <p className={styles.hero_button_text}>Let's talk</p>
                    </div>
                </div>
            </div>
            <div className='right-wrapper'>
                <Nav />
            </div>
        </div>
    ) 
}

export default Top;

