import React from 'react';
import './Footer.scss';

const footer = () => {
    return(
        <footer className="footer fixed-bottom">
            by Hernan Garzon de la Roza
            <code>
                <a href="https://github.com/hernangarzondelaroza/to-do-app" target="_blank">Link to the code</a>
            </code>
        </footer>
    );
}

export default footer;
