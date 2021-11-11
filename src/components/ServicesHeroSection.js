import React from 'react'
import ServicesCards from './ServicesCards'
import './ServicesHeroSection.css'

function ServicesHeroSection() {
    return (
        <div className='hero_container'>
            <div className='hero_title'>
                <h1>Entendendo a API da ModoCripto</h1>
            </div>
            <ServicesCards></ServicesCards>
            <ServicesCards></ServicesCards>
            
        </div>
    )
}

export default ServicesHeroSection
