import React from 'react';
import stCard from './Card.module.css';
import { type Products } from 'assets/data/furnitur';

class Card extends React.Component<Products, { value: string }> {
  render() {
    const link = `${this.props.img}`;
    return (
      <div data-testid="card" className={stCard.cards__card}>
        <div className={stCard.card__images}>
          <img src={link} title={this.props.description} alt={this.props.title} />
        </div>
        <div className={stCard.card__text}>
          <div className={stCard.card__category}>{this.props.category}</div>
          <div className={stCard.card__name}>{this.props.title}</div>
          <div className={stCard.card__brand}>{this.props.brand}</div>
          <div className={stCard.card__price}>{this.props.price}</div>
        </div>
      </div>
    );
  }
}
export default Card;
