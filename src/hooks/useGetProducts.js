import React, { useState, useEffect } from 'react';

const useGetProducts = (id = '') => {
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))


    }, [])

    return [product, loading];
}

export default useGetProducts;