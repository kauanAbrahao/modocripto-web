import React, {useState} from "react";
import { Button } from "./Button";
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-master'>
            <img className="hero-img" src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/06/Profitable-Cryptocurrencies-1024x576.jpeg" alt='Crypto'/>
                <div className="hero-text">
                    <h1>Dados Internacionais de Criptomoedas</h1>
                    <p>Atualize sua aplicação em tempo real</p>
                    <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Entenda a API
                    </Button>
                </div>
            </div>
      </div>
    );
  }
  
  export default HeroSection;