import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Rápido e fácil, você terá acesso a dados: </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src='https://image.cnbcfm.com/api/v1/image/106962967-1634709558798-gettyimages-1235570383-porzycki-cryptocu210928_npbUe.jpeg?v=1635185551'
             text='Em tempo real das principais criptomoedas do mercado'
             label='Serviços'
             path='/serviços'
             description={["Valor em tempo real", "Capitalização de mercado", "Maior e menor valor nas últimas 24h"
        , "Rank de capitalização"]}
            />
            <CardItem
              src='https://static.news.bitcoin.com/wp-content/uploads/2018/04/koinex-banner.png'
              text='Provenientes das principais bolsas de valores internacionais'
              label='Serviços'
              path='/products'
              description={["Binance", "Coinbase", "Kraken", "Gemini"]}
            />
            <CardItem
              src='https://uzmancoin.com/wp-content/uploads/2019/06/coinmarketcap-2-1280x720.jpg'
              text='Processados e prontos para o consumo'
              label='Serviços'
              path='/sign-up'
              description={["Separados por criptomoedas", "Separados por data", "Fácil leitura", "Formato JSON"]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
