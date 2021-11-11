import React from 'react'
import ServiceCardsItem from './ServicesCardItem'
import './ServicesCards.css'

function ServicesCards() {
    return (
        <div className='cards'>
            <div className='cards_container'></div>
            <ul className='cards_list'>
                <ServiceCardsItem
                    src='https://cdn-icons-png.flaticon.com/512/136/136525.png'
                    text='A API funciona em formato REST, com retorno das informações em JSON. Através desse arquivo leve e de fácil
                    manipulação, as informações podem ser rapidamento incorporadas em sua aplicação' 
                />
                

            </ul>
        </div>
    )
}

export default ServicesCards
