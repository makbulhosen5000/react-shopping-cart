import React, { useState } from 'react';
import Course from '../Course/Course';
import courseData from '../../fakeData/courseData';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const[course,setCourse]=useState(courseData)
    const[cart,setCart]=useState([]);
    //initial value will be 0 for cart
    
const buttonHandler=(course)=>{
    const newCart=[...cart,course];
    setCart(newCart);
    
}
    return (
        <div className="shop-container">
            <div className="corse-container">
            {
                course.map((course)=>(
                   <Course course={course} buttonHandler={buttonHandler}></Course>
               ))
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

