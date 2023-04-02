import React from 'react';
import { useState } from 'react';
import { data } from '../assets/data/furnitur';
import Card from './UI element/card/Card';
import SearchBar from './UI element/input/MySearch';
import styles from './cardList.module.css'
function CardsList() {
  const massive = data.flat(2)
  const [items] = useState(massive);
  const [sortBy, setSortBy] = useState(localStorage.getItem('rssSearch') || '');

  const handleSearch = (value: string) => {
    setSortBy(value);
  };

  const filteredArr = items.filter((product) => {
    if (
      (
        product.title +
        product.category +
        product.description +
        product.brand +
        product.price +
        product.discountPercentage +
        product.stock +
        product.rating
      )
        .toLowerCase()
        .includes(sortBy.toLowerCase().trim())
    ) {
      return true;
    }
    return false;
  });

  return (
    <div data-testid="cards-list">
      <SearchBar setSortBy={handleSearch} sortBy={sortBy} />
      <div className={styles.cards__wrapper}>
        {filteredArr.map((i) => (
          <Card key={i.id} dataProps={i} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;