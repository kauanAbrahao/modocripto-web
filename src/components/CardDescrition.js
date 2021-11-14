import React from 'react'
import './CardDescription.css'

function CardDescrition(props) {
    return (
        <div className='card-descrip'>
        <ul>
             {props.description.map((item) => (<li>{item}</li>))}
        </ul>
    </div>
    )
}

export default CardDescrition
