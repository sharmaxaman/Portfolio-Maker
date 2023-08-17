import React from 'react';
import "./ScrollUp.css"

const ScrollUp = () => {
  window.addEventListener("scroll",function (){
    const scrollUp=document.querySelector(".scrollUp");
    if(this.scrollY >=560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  })

  return (
  <a href="#home" className="scrollUp">
    <i className="uil uil-arrow-up scrollUp__icon"></i>
  </a>
  )
}

export default ScrollUp
