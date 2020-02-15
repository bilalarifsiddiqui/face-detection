import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br-2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img alt='logo' style={{ paddingTop: '5px  ' }} src={brain} /></div>
            </Tilt>
        </div>
    )
}

export default Logo;