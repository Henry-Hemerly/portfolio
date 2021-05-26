import React from 'react';
import styles from './ContactButton.module.css';

const ContactButton = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.button_h1} contenteditable spellcheck='false'>
                Get in touch
            </h1>
        </div>
    );
};

export default ContactButton;
