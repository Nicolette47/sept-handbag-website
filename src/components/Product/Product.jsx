import React from 'react';
import trendybag from "../../assets/bag_4.png";

const Product = ({isBestSeller, imagebag, title, price}) => {
    return (
        <article>
            <span>{isBestSeller}Best Seller</span>
            <img src={imagebag} alt={title}/>
            <p>{title}</p>
            <h1>{price}</h1>
        </article>
    );
};

export default Product;