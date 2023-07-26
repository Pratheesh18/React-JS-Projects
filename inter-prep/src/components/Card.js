import React from 'react';
import './card.css';
import image from '../download.jpg';


const Card = () => {
    return(
        <div className='card'>
            <img src={image}   alt={image}  width={300} height={300}   />
            <div className='container'>
                <h4> <b>  Naruto </b> </h4>
                <p>  Ninja </p>
            </div>

        </div>
    )
};


export default Card;