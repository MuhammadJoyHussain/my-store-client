import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';

const Home = () => {
    const [ product, setProduct ] = useState([]);
    useEffect(() => {
        fetch('https://calm-garden-05439.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    
    return (
        <div>
            {
                product.map(pd => <Product pd={pd} />)
            }
        </div>
    );
};

export default Home;