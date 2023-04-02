import React from 'react';
import styles from './FormCard.module.css';

type TypeProps = {
    data: {
        name: string;
        birthday: string;
        op: string;
        like: boolean;
        gender: string;
        file: string;
        id: string;
    };
};
function FormCard({ data }: TypeProps) {
    return (
        <div className={styles.form_card} data-testid="form-card-item">
            <h3>{data.name}</h3>
            <img src={data.file} alt={data.name} />
            <div>Birthday: {data.birthday}</div>
            <div>Options: {data.op}</div>
            <div>Do you like this course: {data.like ? 'Yes' : 'No'}</div>
            <div>Gender: {data.gender}</div>
        </div>

    )
}
export default FormCard;