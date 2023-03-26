import React, { RefObject } from "react";
type TypeForCheckbox = {
    label: string;
    type?: string;
    name: string;
    reference: RefObject<HTMLInputElement>;//for access to DOW element
    error: string;
}
class CheckBox extends React.Component<TypeForCheckbox>{
    state = { isChecked: true };
    getInputClasses = () => {
        return "form-check-inputblock" + (this.props.error ? ' is-invalid' : '');
    }
    render(): React.ReactNode {
        return (
            <div className="form-checked">
                <input type="checkbox"
                    className={this.getInputClasses()}
                    data-id={this.props.name}
                    defaultChecked={this.state.isChecked}
                    ref={this.props.reference}
                />
                <label className="formCheckedLabel"
                    data-htmlFor={this.props.name}>{this.props.label}</label>
                {<div className="errorInCheck">{this.props.error}</div>}

            </div>
        )
    }
}
export default CheckBox;