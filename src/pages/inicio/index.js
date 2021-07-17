import React, { useState, useEffect } from 'react';
import Products from '../../components/Products'
import { List } from '../../styles/reusable'
import { Row } from 'react-bootstrap';

const Home = () => {
    const [ product, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

        return { product, loading };
    }, [])

    const renderListProducts = () => {
        return (
            loading 
            ? <p> Cargando... </p> 
            : <Row xs={1} md={2} lg={4}>{ product.map(item => <Products key={item.id} {...item} />) }</Row> 
        )
    }

    return (
        <div>
            {
                renderListProducts()
            }
        </div>
    );
}

export default Home;
