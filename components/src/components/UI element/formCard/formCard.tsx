import React from 'react';
import styles from './FormCard.module.css';

type TypeProps = {
    dataPr: {
        name: string;
        birthday: string;
        op?: string;
        like: boolean;
        gender: string;
        file: string;
        id: string;
    };
};
function FormCard({ dataPr }: TypeProps) {
    return (
        <div className={styles.form_card} data-testid="form-card-item">
            <h3>{dataPr.name}</h3>
            <img src={dataPr.file} alt={dataPr.name} />
            <div>Birthday: {dataPr.birthday}</div>
            <div>Options: {dataPr.op}</div>
            <div>Do you like this course: {dataPr.like ? 'Yes' : 'No'}</div>
            <div>Gender: {dataPr.gender}</div>
        </div>

    )
}
export default FormCard;