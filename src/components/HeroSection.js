import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*(<video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>DADOS INTERNACIONAIS DE CRIPTOMOEDAS</h1>
      <p>Atualize sua aplicação em tempo real</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          toLink='/servicos'
        >
          Entenda a API
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
