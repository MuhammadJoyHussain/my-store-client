import React from 'react';

const OrderDetails = (props) => {
    const { shippment, orderTime, products } = props.orders;
   
    return (
        <div style={{ backgroundColor: "#FFFDFA", borderRadius: "20px", boxShadow: "3px 2px 3px 2px #F6F4F5", width: "120vh", margin:"20px" }}>
            <div style={{ padding: "20px"}}>
                <h3>Your Name: {shippment.name}</h3>
                <h5>Your Email: {shippment.email}</h5>
                <h5>Your Shipment Address: {shippment.address}</h5>
                <h5>Your Phone Number: {shippment.phone}</h5>
                <h5>Order date: {(new Date(orderTime).toString('dd/MM/yyyy'))}</h5>
            </div>
        </div>
    );
};

export default OrderDetails;