import React from 'react';
import useState from 'react';
import { data } from '../assets/data/furnitur';
import Card from './UI element/card/Card';

export const CardList = () => {
  return (
    <div className="cards__box">
      {data.flat(2).map((el) => (
        <Card data={{
          id: 0,
          title: '',
          description: '',
          price: '',
          discountPercentage: '',
          rating: 0,
          stock: 0,
          brand: '',
          category: '',
          img: [],
          total: 0
        }} key={el.id} {...el} />
      ))}
    </div>
  );
};
