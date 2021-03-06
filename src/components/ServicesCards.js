import React from 'react'
import ServiceCardsItem from './ServicesCardItem'
import './ServicesCards.css'

function ServicesCards() {
    return (
        <div className='cards'>
            <div className='cards_container'></div>
            <ul className='cards_list'>
                <ServiceCardsItem
                    src='./images/json-img.png'
                    text='A API funciona em formato REST, com retorno das informações em JSON. Através desse arquivo leve e de fácil
                    manipulação, as informações podem ser rapidamento incorporadas em sua aplicação' 
                />
                

            </ul>
        </div>
    )
}

export default ServicesCards
