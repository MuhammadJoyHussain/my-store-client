import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from './OrderDetails';

const Order = () => {
    const [ loggedInUser ] = useContext(UserContext);
    const [ order, setOrder ] = useState([]);
    useEffect(() => {
        fetch('https://calm-garden-05439.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])


    return (
        <div>
            <h1>You have {order.length} orders</h1>
            {
                order.map(orders => <OrderDetails orders={orders} />)
            }
        </div>
    );
};

export default Order;