import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className='footer__title'>Razi</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/razzzi__/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/razi03/" className="footer__social-link" target="_blank">
        <i className="bx bxl-github"></i>
        </a>

        <a href="https://github.com/razi03" className="footer__social-link" target="_blank">
        <i className="bx bxl-linkedin-square"></i>
        </a>
            </div>

            <span className='footer__copy'>&#169; Razi. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer