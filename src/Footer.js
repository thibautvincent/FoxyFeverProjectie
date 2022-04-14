import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            <div id='footer'>
                <p>Thibaut Vincent © {new Date().getFullYear()}</p>
            </div>
        );
    }
}

export default Footer;