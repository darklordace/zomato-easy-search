import React from 'react';
import Tilt from 'react-tilt';
import logo from '../../logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div id="logo" className="outerTilt">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }}>
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
            </Tilt>
        </div>
    );
}

export default Logo;