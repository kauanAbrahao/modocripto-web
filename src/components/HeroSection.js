import React, {useState} from "react";
import { Button } from "./Button";
import './HeroSection.css'

function HeroSection() {
    return(
        <div className='hero-container'>
             {/*<img src = "https://www.teahub.io/photos/full/327-3279475_bitcoin-wallpaper-4k.jpg" alt="Crypto"/> */}

                <h1>Dados Internacionais de Criptomoedas</h1>
                <h2>Atualize seu aplicativo em tempo real</h2>
                <div className='hero-btns'>
                    <Button 
                        className='btns' buttonStyle='btn--outline' buttonSize='btn--large'
                    >   Entenda a API
                    </Button>
                </div>
        </div>

    )


}

export default HeroSection;