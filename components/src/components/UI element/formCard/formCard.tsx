import React from 'react';
import styles from './FormCard.module.css';

type TypeProps = {
    name: string;
    birthday: string;
    select: string;
    like: boolean;
    gender: string;
    image: string;
    id: string;
};
class FormCard extends React.Component {
    item: TypeProps;
    constructor(props: TypeProps) {
        super(props);
        this.item = props;
    }
    render(): React.ReactNode {
        return (
            <div className={styles.form_card} data-testid="form-card-item">
                <h3>{this.item.name}</h3>
                <img src={this.item.image} alt={this.item.name} />
                <div>Birthday: {this.item.birthday}</div>
                <div>Options: {this.item.select}</div>
                <div>Do you like this course: {this.item.like ? 'Yes' : 'No'}</div>
                <div>Gender: {this.item.gender}</div>
            </div>
        );
    }
}
export default FormCard;