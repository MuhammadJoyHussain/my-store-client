import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Review = () => {
    const { id } = useParams();
    const history = useHistory();
    const [ review, setReview ] = useState([]);
    useEffect(() => {
        fetch(`https://calm-garden-05439.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    const handleCheckout = () => {
        const url = `/Checkout/${id}`;
        history.push(url);
    }

    return (
        <div style={{marginTop:'5%', marginLeft:'40%'}}>
            <img style={{width:"200px"}} src={review.imageURL} />
            <h3>Product Name: {review.name}</h3>
            <h4>Price: {review.price}</h4>
            <Button onClick={handleCheckout}>Checkout</Button>
        </div>
    );
};

export default Review;