import React from 'react';
import { data } from '../assets/data/furnitur';
import Card from './UI element/card/Card';

export const CardList = () => {
    return (
        <div className="cards__box">
            {data.flat(2).map((el) => (
                <Card key={el.id} {...el} />
            ))}
        </div>
    );
};