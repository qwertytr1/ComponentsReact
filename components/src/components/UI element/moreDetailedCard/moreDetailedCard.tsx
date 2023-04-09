import React from 'react';
import { TCharacters } from '../../types/types';
import styles from './moreDetailedCard.module.css';
import Header from '../../Header'
type TProps = {
    data: TCharacters['results'][0];
};

function MoreDetailedCard({ data }: TProps) {
    return (
        <><Header /><div data-testid="card-item" className={styles.card}>
            <h3>{data.name}</h3>
            <img src={data.image} alt={data.name} />
            <div>
                <span>Gender:</span> {data.gender}
            </div>
            <div>
                <span>Status:</span> {data.status}
            </div>
            <div>
                <span>Species:</span> {data.species}
            </div>
            {data.type && (
                <div>
                    <span>Type:</span> {data.type}
                </div>
            )}
            <div>
                <span>Origin:</span> {data.origin.name}
            </div>
            <div>
                <span>Loaction:</span> {data.location.name}
            </div>
            <div style={{ width: '350px' }}>
                <span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Alias, possimus.
            </div>
        </div></>
    );
}

export default MoreDetailedCard;