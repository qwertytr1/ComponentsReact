import React from 'react';
import { Link } from 'react-router-dom';
import stCard from './Card.module.css';
type TProps = {
  data: {
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

function Card({ data }: TProps) {
  return (
    <div data-testid="card" className={stCard.cards__card}>
      <div className={stCard.card__images}>
        <img src={data.img[0]} title={data.description} alt={data.title} />
      </div>
      <div className={stCard.card__text}>
        <div className={stCard.card__category}>{data.category}</div>
        <div className={stCard.card__name}>{data.title}</div>
        <div className={stCard.card__brand}>{data.brand}</div>
        <div className={stCard.card__price}>{data.price}</div>
      </div>
    </div>
  )
}
export default Card;
