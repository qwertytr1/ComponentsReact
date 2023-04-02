import React from 'react';
import { Link } from 'react-router-dom';
import stCard from './Card.module.css';
type TProps = {
  dataProps: {
    id: number;
    title: string;
    description: string;
    price: string;
    discountPercentage: string;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    img: string[];
    total: number;
  }
}

function Card({ dataProps }: TProps) {
  return (
    <div data-testid="card" className={stCard.cards__card}>
      <div className={stCard.card__images}>
        <img src={dataProps.img[0]} title={dataProps.description} alt={dataProps.title} />
      </div>
      <div className={stCard.card__text}>
        <div className={stCard.card__category}>{dataProps.category}</div>
        <div className={stCard.card__name}>{dataProps.title}</div>
        <div className={stCard.card__brand}>{dataProps.brand}</div>
        <div className={stCard.card__price}>{dataProps.price}</div>
      </div>
    </div>
  )
}
export default Card;
