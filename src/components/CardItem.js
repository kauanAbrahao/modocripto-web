import React from 'react';
import CardDescrition from './CardDescrition';
import './CardItem.css'

export default function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
         <a href={props.path}> <img className="cards__item__img" alt="Travel" src={props.src} /> </a>
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
        {props.description ? <CardDescrition description={props.description} /> : ''}
      </li>
    </>
  );
}