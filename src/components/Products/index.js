import React, { useState, useContext } from 'react';
import { Item, CardImg, CardContainer, CardFooter, CardColumn, CardBody, CardTitle } from './styles'
import AppContext from '../../context/AppContext'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Products = (props) => {
    let history = useHistory();
    const { state, addToCart, removeFromCart } = useContext(AppContext)
    const [status, setStatus] = useState(() => {
        const { cart } = state
        const isExist = cart.filter(items => items.id == props.id)

        return isExist.length == 1
    })

    const toggleState = (product) => {
        !status ? addToCart(product) : removeFromCart(product)
        setStatus(!status)
    }

    const redirect = (id) => {
        history.push(`/detail/${id}`);
    }

    return (
        <CardColumn>
            <CardContainer>
                <CardImg onClick={() => redirect(props.id)} variant="top" src={props.image} />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <p>Precio: $ {props.price}</p>
                </CardBody>
                <CardFooter>
                    
                    <Button onClick={ () => toggleState(props)}>{ status ? 'Quitar' : 'Agregar' }</Button>
                </CardFooter>
            </CardContainer>
        </CardColumn>
    );
}

export default Products;
