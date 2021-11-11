import React from 'react'
import './CardDescription.css'

function CardDescrition(props) {
    return (
        <div>
        <ul>
             {props.description.map((item) => (<li>{item}</li>))}
        </ul>
    </div>
    )
}

export default CardDescrition
