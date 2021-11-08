import React, {useState} from "react";
import { Button } from "./Button";
import './HeroSection.css'

function HeroSection() {
    return (
      <div className='hero-container'>
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
        <div className='hero-img'></div>
      </div>
    );
  }
  
  export default HeroSection;