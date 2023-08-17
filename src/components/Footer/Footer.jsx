import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Rahul</h1>

         <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#project" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>
         </ul>
    

    <div className="footer__social">
    <a href="https://www.instagram.com/rahult9930/" className="footer__social-link">
    <i class="bx bxl-instagram"></i>
    </a>

    <a href="https://www.linkedin.com/in/rahul-tailor-36b22b231/" className="footer__social-link" >
    <i class="bx bxl-linkedin"></i>
    </a>

    <a href="https://github.com/rahult9930" className="footer__social-link" >
    <i class="bx bxl-github"></i>
    </a>
    </div>
    <span className="footer__copy">&#169; Rahul. All rigths reserved</span>
    </div>
   </footer>
  )
}

export default Footer
