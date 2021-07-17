import styled, { css } from 'styled-components'
import { Navbar } from 'react-bootstrap';

export const NavBarContainer = styled(Navbar)
`
    margin: 15px 0;
`

export const Button = styled.button `
    display: flex;
    align-items: center;
    padding-top: 8px;
    & svg {
        margin-right: 4px;
    }
`
export const Logo = styled.img `
    width: 100px;
`
export const HeaderContent = styled.div `
    display: flex;
    justify-content: space-between;
`
export const HeaderCheckout = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    width: 60px;
    margin: 0 0 0 0.5em;
    & svg {
        width: 30px;
        height: 30px;
    }
`
export const HeaderContentShop = styled.div `
    text-align: center;
`


export const HeaderAlert = styled.div `
    border-radius: 50%;
    border: 2px solid;
    font-size: 14px;
    margin-left: 4px;
    padding: 2px 8px;
    font-weight: bold;
`

export const ContainerShopText = styled.div `
    text-align: center;
    width: 100%;
    background: #000;
    background-size: cover;
    color: #fff;
    font-size: 15px;
    padding: 15px;
    font-weight: bold;
    text-align: right;
`