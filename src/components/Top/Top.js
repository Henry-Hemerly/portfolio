import React from 'react';
import styles from './Top.module.css';
import Nav from '../Nav/Nav.js';
import ArrowDown from '../ArrowDown/ArrowDown';
import ContactButton from '../ContactButton/ContactButton';

const Top = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left_wrapper}>
                <div className={styles.content}>
                    <h1 className={styles.hero_title}>
                        Let's build something amazing
                    </h1>
                    <p className={styles.hero_p}>
                        Tjena! My name's Henry, I'm a developer and a graphic
                        designer based in Stockholm. Welcome to my portfolio!
                    </p>
                    <div className={styles.hero_button}>
                        <p className={styles.hero_button_text}>Get in touch</p>
                    </div>
                    {/* <ContactButton /> */}
                </div>
                <ArrowDown />
            </div>
            <div className={styles.right_wrapper}>
                <Nav />
            </div>
        </div>
    );
};

export default Top;
