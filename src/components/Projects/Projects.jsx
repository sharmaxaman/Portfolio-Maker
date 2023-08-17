import React from 'react';
import './Projects.css';
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Projects = () => {
  return (
   <section className="projects container section" id='project'>
    <h2 className="section__title">
     My Projects 
    </h2>
   <Swiper className="projects__container"
    loop={true}
    grabCursor={true}
    spaceBetween={24}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      576: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 1,
       
      },
     
    }}
    modules={[Pagination]}
   >
     { Data.map(({id,image,title,description}) => {
      return (
        <SwiperSlide className="projects__card" key={id}>
        <img src={image} alt="" className="projects__img" />

        <h3 className="projects__name">{title}</h3>
        <p className="projects__description">{description}</p>
        </SwiperSlide>
      )
     })}
   </Swiper>
   </section>
  )
}

export default Projects