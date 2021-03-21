import React from 'react';
import './index.css';
import logo from '../../images/mikaflix.png'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src={logo} alt="netflix" />
                </a>
            </div>
            <div className="header--user">
                <img src="https://i.pinimg.com/474x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg" />
            </div>
        </header>
    )
}