import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
type Props = Record<string, string>;

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
      case '/form':
        this.setState({ title: 'Form Page' });
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
            <NavLink
              onClick={() => {
                this.setState({ title: 'Main page' });
              }}
              className="item"
              to="/"
            >
              Main
            </NavLink>
            <NavLink
              onClick={() => {
                this.setState({ title: 'About page' });
              }}
              className="item"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => {
                this.setState({ title: 'Form page' });
              }}
              className="item"
              to="/form"
            >
              Form
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
