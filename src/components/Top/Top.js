import React from 'react';
import './Top.css';
import Nav from '../Nav/Nav.js';

const Top = props => {
    return (
        <div className='wrapper'>
            <div className='left-wrapper'>
                <div className='content'>
                    <h1 className='hero-title'>Let's build something amazing</h1>
                    <p className='hero-p'>Tjenna! My name's Henry, I'm a developer and a graphic designer. Welcome to my portfolio!</p>
                    <div className='hero-button'>
                        <p className='hero-button-text'>Let's talk</p>
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

