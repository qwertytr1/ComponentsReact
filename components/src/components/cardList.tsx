import CardItem from './UI element/card/Card';
import styles from './cardList.module.css';
import { TCharacters } from './types/types';
import React from 'react';

type TProps = {
  data: TCharacters['results'];
};

function CardsList({ data }: TProps) {
  return (
    <div data-testid="cards-list">
      <div className={styles.cards__wrapper}>
        {data.map((item) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;