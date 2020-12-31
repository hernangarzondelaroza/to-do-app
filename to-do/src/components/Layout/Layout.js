import React from 'react';
import './Layout.scss';

import Container from 'react-bootstrap/Container';

const layout = (props) => {
    return (
        <Container fluid>
            <header className="header">
                To Do Web App
            </header>
            <p>Select a user and add or update the different tasks :)</p>
            <main>
                {props.children}
            </main>
        </Container>
    );
}

export default layout;