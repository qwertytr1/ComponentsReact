import React, { RefObject } from "react";
import styles from './switch.module.css'
type SwitchBox = {
    label: string;
    type?: string;
    name: string;
    reference: RefObject<HTMLInputElement>;
    error: string;
    options: string[];
}
class Switcher extends React.Component<SwitchBox>{
    state = { isChecked: true };
    getInputClasses = () => {
        return 'form-check-input' + (this.props.error ? ' is-invalid' : '');
    };
    render(): React.ReactNode {
        return (
            <div className={styles.switcher}>
                <span>{this.props.options[0]}</span>
                <input className={styles.checkbox} type="checkbox" name={this.props.name} ref={this.props.reference} />
                <span>{this.props.options[1]}</span>
                {this.props.label && (
                    <label className="form-checkLabel" data-htmlfor={this.props.name}>
                        {this.props.label}
                    </label>
                )}
                {<div className="error">{this.props.error}</div>}
            </div>
        )
    }
}
export default Switcher;