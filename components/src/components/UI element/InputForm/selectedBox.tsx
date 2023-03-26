import React, { RefObject } from 'react';

type TypeWithSelected = {
    label: string;
    name: string;
    defaultOption: string;
    options: { label: string; value: string }[];
    error: string;
    reference: RefObject<HTMLSelectElement>;
    disabledOption: boolean;
};

class Selected extends React.Component<TypeWithSelected> {
    handleChange = () => {
        console.log('he');
    };

    render(): React.ReactNode {
        return (
            <div>
                <label data-htmlfor={this.props.name}>{this.props.label}</label>
                <div>
                    {
                        <>
                            <select data-id={this.props.name} data-name={this.props.name} ref={this.props.reference}>
                                <option disabled={this.props.disabledOption} value="" key="DEFAULT">
                                    {this.props.defaultOption}
                                </option>
                                {this.props.options &&
                                    this.props.options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                            </select>
                            <span />
                        </>
                    }
                </div>
                {<div className="error">{this.props.error}</div>}
            </div>
        );
    }
}
export default Selected;