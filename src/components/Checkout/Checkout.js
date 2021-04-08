import React from 'react';
import './Checkout.css'
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useParams } from 'react-router';

const Checkout = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const url = `https://calm-garden-05439.herokuapp.com/product/${id}`;
        const orderDetails = { ...loggedInUser, products: url, shippment: data, orderTime: new Date() };

        fetch('https://calm-garden-05439.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Successfully Placed')
                }
            })

    }

 

    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} defaultValue={loggedInUser.name} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
               
                <input {...register("email", { required: true })} defaultValue={loggedInUser.email} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}
               
                <input {...register("address", { required: true })} defaultValue={loggedInUser.adress} placeholder="Your Address" />
                {errors.address && <span className="error">Adress is required</span>}
               
                <input {...register("phone", { required: true })} defaultValue={loggedInUser.phoneNumber} placeholder="Your Phone Number" />
                {errors.phone && <span className="error">Phone Number is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Checkout;