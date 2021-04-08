import React from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = (props) => {
    const { name, price, _id } = props.product;
    const deleteProduct = () =>{
        fetch(`https://calm-garden-05439.herokuapp.com/deleteProduct/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            const product = document.getElementById('product')
            product.style.display = 'none';
        })
    }
    
    return (
        <div id="product" style={{margin:"50px", display:"flex"}}>
        <h5 style={{margin:"10px"}}><b>Name and price of the Product:</b> {name} ৳{price}</h5>
        <Button onClick={() => deleteProduct(props._id)}>Delete</Button>
    </div>
    );
};

export default ManageProduct;