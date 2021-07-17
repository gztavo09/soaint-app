import React from 'react';
import Header from '../components/Header'
import { Container } from 'react-bootstrap';

const Layout = ({children}) => {
    return (
        <div className="main">
            <Header />
            <Container>
                { children }
            </Container>
        </div>
    );
}

export default Layout;
