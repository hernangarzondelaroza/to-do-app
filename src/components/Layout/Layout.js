import React from 'react';
import './Layout.scss';

import Container from 'react-bootstrap/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import PropTypes from 'prop-types';

const layout = (props) => {
    return (
        <Container fluid>
            <Header />
            <p>Select a user and add or update the different tasks :)</p>
            <main>
                {props.children}
            </main>
            <Footer />
        </Container>
    );
}

layout.propTypes = {
    children: PropTypes.any
}

export default layout;
