import { Button } from 'bootstrap';
import React, { useState } from 'react';
import './Course.css';

const Course = (props) => {
    const {name, instructor, image, price } = props.course;
    
    return (
        <div className="course">  
            <div className="course-img">
                <img src={image} alt=""/>
            </div>

            <div>
                <h1>Name: {name}</h1>
                <h1>Instructor: {instructor}</h1>
                <h1>Price: {price}</h1>
                <button onClick={ () =>(props.buttonHandler(props.course)) } className="btn btn-warning">Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;
