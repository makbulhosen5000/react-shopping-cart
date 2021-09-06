import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = (props) => {
        const cart =props.cart;
        const courseTotal=cart.reduce((sum, course) => sum + course.price, 0);
        const tax = courseTotal / 10
    return (
        <div>
            <h1>Total item ordered: {cart.length}</h1>
             <h2>Price: {courseTotal}</h2>
             <h2>Tax: {tax}</h2>
             <h2>Grand Total: {courseTotal+tax}</h2>
             <button className="btn btn-success">Please Order</button>
        </div>
    );
};

export default Cart;