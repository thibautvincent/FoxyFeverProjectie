import React from 'react';
import './Promo.css';

const Promo = (props) => {
    return (
        <div className='promo'>
            <p className='promo-span'>
                {props.promo.start} - {props.promo.end}
            </p>
            <p className='promo-span'>
                {props.promo.title} = {props.promo.price}
            </p>
            <br/>
            <p className='promo-age'>
                {props.promo.age}
            </p>
        </div>
    );
}

export default Promo;