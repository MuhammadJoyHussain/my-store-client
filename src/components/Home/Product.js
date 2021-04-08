import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Product = (props) => {
    const { name, price, imageURL, _id } = props.pd;


    const history = useHistory();
    const productDetail = () =>{
        const url = `/detail/${_id}`;
        history.push(url);
    }

    const handleReview = () => {
        const url = `/review/${_id}`;
        history.push(url);
    }

    return (
        <div style={{display:"inline-flex"}}>
            <div style={{margin: "90px"}}>
            <img onClick={productDetail} style={{width: "200px", height:"180px"}} src={imageURL} />
            <h4 onClick={productDetail}>Phone Name: {name}</h4>
            <h5 onClick={productDetail}>Phone Price: ৳ {price}</h5>
            <Button onClick={handleReview}>Buy Now</Button>
            </div>
        </div>
    );
};

export default Product;