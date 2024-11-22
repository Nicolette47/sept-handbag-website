import React from 'react';
import trendybag from "../../assets/bag_4.png";

const Product = (props) => {
    return (
        <article>
            <span>{props.isBestSeller}Best Seller</span>
            <img src={props.imagebag} alt={props.title}/>
            <p>{props.title}</p>
            <h1>{props.price}</h1>
        </article>
    );
};

export default Product;