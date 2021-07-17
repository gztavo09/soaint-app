import styled from 'styled-components'
import { Popover } from 'react-bootstrap';

export const PopoverContainer = styled(Popover)
`
    padding: 15px;
`

export const PopoverHeader = styled.h4 `
    font-size: 12px;
`

export const PopoverBody = styled.div `
    border-top: 1px solid rgba(0, 0, 0, .2);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
`

export const CheckoutContainer = styled.div `
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    grid-row-gap: 1.5em;
    display: grid;
    padding: 0 0 4em 0;
`

export const PopoverItem = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
    &:last-child {
        border-bottom: 0;
    }
    & .fas{
        margin: 0 0 0 10px;
        color: rgba(0,0,0,0.4);
        cursor: pointer;
    }
`

export const PopoverRemoveItem = styled.button `
    background-color: transparent;
    border: none;
    outline: none;
`

export const PopoverElement = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    &  h4{
        margin: 0;
        font-size: 12px;
        max-width: 50%;
    }
    & span {
        font-weight: bold;
    }
`
export const PopoverFooter = styled.h4 `
    background: #ccc;
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    padding: 8px;
    text-align: right;
`

export const Button = styled.button `
    background: transparent; 
    border: 0;
    & svg {
        width: 25px;
        height: 25px;
    }
`