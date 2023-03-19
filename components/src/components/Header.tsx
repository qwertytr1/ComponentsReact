import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
interface Props {
    [title: string]: string;
}

class Header extends Component<Props, { title: string }> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    componentDidMount() {
        switch (location.pathname) {
            case '/':
                this.setState({ title: 'Main page' });
                break;
            case '/about':
                this.setState({ title: 'About page' });
                break;
            default:
                this.setState({ title: 'page 404' });
        }
    }

    render() {
        return (
            <div className="header__container">
                <div className="header__logo">
                    <h1>{this.state.title}</h1>
                </div>
                <div className="header__menu">
                    <nav className="nav">
                        <NavLink onClick={() => this.setState({ title: 'Main page' })} className="item" to="/">
                            Main
                        </NavLink>
                        <NavLink
                            onClick={() => this.setState({ title: 'About page' })}
                            className="item"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;