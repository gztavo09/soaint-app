import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CardPrice, CardBody, CardImg, CardCategory } from './styles'
import AppContext from '../../context/AppContext'
import { MdClose } from 'react-icons/md'
import { Row, Col, Card, Button } from 'react-bootstrap';

const Detail = () => {
    const { id } = useParams()
    const [ product, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const { state, addToCart, removeFromCart } = useContext(AppContext)

    const [status, setStatus] = useState(() => {
        const { cart } = state
        const isExist = cart.filter(items => items.id == id)

        return isExist.length == 1
    })

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

        return { product, loading };
    }, [])

    const toggleState = (product) => {
        !status ? addToCart(product) : removeFromCart(product)
        setStatus(!status)
    }

    const renderProduct = () => {
        return (
            loading 
            ? <p> Cargando... </p> 
            :  <Card>
                    <Row>
                        <div className="col-md-4">
                            <CardImg src={product.image} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <CardBody>
                                <CardCategory>{product.category}</CardCategory>
                                <Card.Title>{product.title}</Card.Title>
                                <p>{product.description}</p>
                                <CardPrice>
                                    <p>Precio: $ {product.price}</p>
                                </CardPrice>
                                <Button onClick={ () => toggleState(product)}>{ status ? 'Quitar' : 'Agregar' }</Button> 
                            </CardBody>
                        </div>
                    </Row>
                </Card>
        )
    }

    return (
        <div>
            {
                renderProduct()
            }
        </div>
	);
}

export default Detail;
