import styled, { css } from 'styled-components'
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const { Img, Footer, Body, Title } = Card

export const Item = styled.div `
    border-style: solid;
    border-width: 1px;
    border-color: #fff;
    box-shadow: 0px 0px 5px 0px rgb(0 94 133 / 52%);
    transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    margin: 0 10px 0 0;
    max-width: 320px;
`

export const CardContainer = styled(Card)
`
    height: 100%;
`

export const CardImg = styled(Img)
`
    padding: 25px;
`

export const CardFooter = styled(Footer)
`
    text-align: right;
`

export const CardColumn = styled(Col)
`
    margin-bottom: 15px;
`

export const CardTitle = styled(Title)
`
    font-size: 13px;
`

export const CardBody = styled(Body)
`
    & p{
        font-weight: bold;
    }
`