import React from 'react';
import { useState } from 'react';
import "./Header.css";
const Header = () => {
// change background header
    window.addEventListener("scroll",function (){
        const header=document.querySelector(".header");
        if(this.scrollY >=80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
      })
    


    const [Toggle,showMenu]=useState(false);
    const [activeNav,setActiveNav]=useState("#home");
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Rahul</a>

            <div className={ Toggle ? "nav__menu show-menu" :"nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home"
                        onClick={() => setActiveNav('#home')}
                        className={activeNav==="#home" ?"nav__link active-link" :"nav__link"}>
                        <i class="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')}
                        className={activeNav==="#about" ?"nav__link active-link" :"nav__link"}>
                        <i class="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li onClick={() => setActiveNav('#skills')}
                        className={activeNav==="#skills" ?"nav__link active-link" :"nav__link"}>
                        <a href="#skills" className="nav__link">
                        <i class="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>
                    <li onClick={() => setActiveNav('#Qualifications')}
                        className={activeNav==="#Qualifications" ?"nav__link active-link" :"nav__link"}>
                        <a href="#Qualifications" className="nav__link">
                            <i className="uil uil-diary nav__icon"></i>Qualifications
                        </a>
                    </li>

                    <li onClick={() => setActiveNav('#project')}
                        className={activeNav==="#project" ?"nav__link active-link" :"nav__link"}>
                        <a href="#project" className="nav__link">
                            <i className="uil uil-diary nav__icon"></i>Projects
                        </a>
                    </li>
                    <li onClick={() => setActiveNav('#contact')}
                        className={activeNav==="#contact" ?"nav__link active-link" :"nav__link"}>
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
             <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header