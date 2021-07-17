import React, { useState, useEffect } from 'react';
import Products from '../../components/Products'
import { List } from '../../styles/reusable'
import { Row } from 'react-bootstrap';
import useGetProducts from '../../hooks/useGetProducts'

const Home = () => {
    const [product, loading] = useGetProducts()

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
