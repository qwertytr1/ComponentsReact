import React from 'react';
import github from './../assets/github.png';
import rsschool from './../assets/rs_school_js.svg';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__items">
        <div className="footer__item">
          <a href="https://github.com/qwertytr1" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </div>
        <div className="footer__item">All Rights Reserved © qwertytr1, 2023</div>
        <div className="footer__item">
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            <img src={rsschool} className="rsschool" alt="rsschool" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
