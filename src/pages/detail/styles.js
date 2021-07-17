import styled from 'styled-components'
import { Card } from 'react-bootstrap';

const { Body, Img } = Card

export const CardPrice = styled.h3 `
    font-weight: bold;
    font-size:14px;
`

export const CardCategory = styled.h3 `
    font-weight: bold;
    font-size: 11px;
    border: 2px solid #000;
    margin: 15px 0;
    padding: 12px;
    text-transform: uppercase;
`

export const CardBody = styled(Body)
`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: start;
    flex-direction: column;
    & p {
        text-align: justify;
    }
`

export const CardImg = styled(Img)
`
    padding: 25px
`