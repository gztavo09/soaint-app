import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContent, HeaderContentShop, Logo, HeaderCheckout, HeaderAlert, ContainerShopText, NavBarContainer } from './styles'
import AppContext from '../../context/AppContext'
import { Navbar, Container } from 'react-bootstrap';
import Preview from '../Preview'

const Header = () => {
    const { state } = useContext(AppContext)
    const { cart } = state
    return (
        <div>
            <ContainerShopText><Container>SHOP SOAINT</Container></ContainerShopText>
                <NavBarContainer>
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">
                                <Logo src="https://soaint.com/wp-content/uploads/2021/04/Logo-Soaint.svg" alt=""/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Preview />
                            <HeaderAlert>
                                {cart.length}
                            </HeaderAlert>
                        </Navbar.Collapse>
                    </Container>
                </NavBarContainer>
        </div>
        
    );
}

export default Header;
