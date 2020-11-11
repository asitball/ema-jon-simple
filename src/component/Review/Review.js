import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const {cart, setCart} = useState([]);

    useEffect(()=>{
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.Keys(savedCart);
       const counts = productKeys.map(key =>savedCart[key]);
        console.log(counts);
    })
    return (
        <div>
            <h1>This is Review</h1>
        </div>
    );
};

export default Review;