import React from 'react'
import './ServicesCardItem.css'

function ServicesCardItem(props) {
    return (
        <div className='service_card_item'>
            <img src={props.src} alt="JSON"/>
            <p>{props.text}</p>            
        </div>
    );
}

export default ServicesCardItem
