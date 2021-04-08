import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const Manage = () => {
    const [ products, setProducts ] = useState([])
   
    useEffect(() => {
        fetch('https://calm-garden-05439.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                products.map(product => <ManageProduct product={product} />)
            }
        </div>
    );
};

export default Manage;