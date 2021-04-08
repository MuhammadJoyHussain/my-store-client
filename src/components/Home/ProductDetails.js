import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const [productDetail, setProductDetail] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://calm-garden-05439.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    }, [])


    return (
        <div style={{ display: "flex" }}>
            <img style={{ width: "200px" }} src={productDetail.imageURL} alt="" />
            <div style={{ marginTop: "30px" }}>
                <h5>Product Name: {productDetail.name}</h5>
                <h6>Product Price: ৳ {productDetail.price}/-</h6>
                <h6>Launch: {productDetail.launch}</h6>
                <h6>Network: {productDetail.network}</h6>
                <h6>Bettary: {productDetail.battery}</h6>
            </div>
        </div>

    );
};

export default ProductDetails;