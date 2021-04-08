import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://calm-garden-05439.herokuapp.com/addProduct`
        console.log(productData);
        fetch (url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
    }

    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', 'd3e438ce52783de7c26797c259c7e11c')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
          setImageURL(res.data.data.display_url);
        })
        .then(err =>{
            console.log(err);
        })

    }

    return (
        <div style={{ margin: "80px 300px" }}>
            <h3 style={{margin: "30px 100px"}}>Add Products Here</h3>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true })} placeholder="Product Name" />
                {errors.name && <span className="error">Name is required</span>}
                
                <input {...register("price", { required: true })}  placeholder="Product Price" />
                {errors.price && <span className="error">Price is required</span>}
                
                <input {...register("files", { required: true })} type="file"  onChange={handleImageUpload} />
                {errors.files && <span className="error">file is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;