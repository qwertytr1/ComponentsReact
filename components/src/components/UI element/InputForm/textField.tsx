import React, { RefObject } from 'react';

type TypeText = {
    label: string;
    type?: string;
    name: string;
    value: string;
    error: string;
    onChange: () => void;
};

type TypeStateTextField = { showPassword: boolean };

class Text extends React.Component<TypeText, TypeStateTextField> {
    static defaultProps: { type: string };
    constructor(props: Readonly<TypeText>) {
        super(props);
        this.state = { showPassword: false };
    }
    handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        console.log(target);
    };
    toggleShowPassword = () => {
        this.setState((prevState) => {
            !prevState.showPassword;
        });
    };
    render(): React.ReactNode {
        return (
            <div>
                <label data-htmlfor={this.props.name}>{this.props.label}</label>
                <div>
                    <input
                        type={this.state.showPassword ? 'text' : this.props.type}
                        data-id={this.props.name}
                        data-name={this.props.name}
                        value={this.props.value}
                        onChange={this.handleChange}
                    />
                    {this.props.error && <div>{this.props.error}</div>}
                    {this.props.type === 'password' && (
                        <label htmlFor="chk">
                            <input type="checkbox" id="chk" onChange={this.toggleShowPassword} checked={this.state.showPassword} />
                            {'show password'}
                        </label>
                    )}
                </div>
            </div>
        );
    }
}
Text.defaultProps = {
    type: 'text',
};

export default Text;