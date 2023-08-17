import React from 'react';
import { useState } from 'react';
import "./Qualifications.css";

const Qualifications = () => {
  const [toggleState,setToggleStage]=useState(1);
  const toggleTab=(index) => {
    setToggleStage(index);
  };

  return (
    <section className="qualification section" id="Qualifications">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
         <div className="qualification__tabs">
           <div className={toggleState===1 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div> 

            <div className={toggleState===2 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>  Achievements
            </div> 
            </div>   

           <div className="qualification__sections">
            <div className={toggleState===1 ?"qualification__content qualification__content-active":"qualification__content"}>

                <div className="qualification__data">
                      <div>
                        <h3 className="qualification__title">B.Tech(CGPA:9.019)</h3>
                        <span className="qualification__subtitle">National Institute of Technology,Kurukshetra</span>
                       <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> 2020-Present
                        </div> 
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                </div>

                <div className="qualification__data">
                     <div>

                     </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>

                      <div>
                        <h3 className="qualification__title">XII(86.6%)</h3>
                        <span className="qualification__subtitle">SS International School,Jaipur</span>
                       <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i>2019
                        </div> 
                      </div>
                     
                </div>

                <div className="qualification__data">
                      <div>
                        <h3 className="qualification__title">X(90.33%)</h3>
                        <span className="qualification__subtitle">Tagore Public Academy,Jaipur</span>
                       <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> 2017
                        </div> 
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                </div>

            </div>

            <div className={toggleState===2 ?"qualification__content qualification__content-active":"qualification__content"}>

                <div className="qualification__data">
                      <div>
                        <h3 className="qualification__title">Leetcode</h3>
                        <span className="qualification__subtitle">Solved 550+ Problems</span>
                       <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> 2022-Present
                        </div> 
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                </div>

                <div className="qualification__data">
                     <div>

                     </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>

                      <div>
                        <h3 className="qualification__title">Frontend</h3>
                        <span className="qualification__subtitle">Created Many Projects</span>
                       <div className="qualification__calendar">
                        <i className="uil uil-calender-alt"></i> 2022-Present
                        </div> 
                      </div>
                     
                </div>
                
            </div>
           </div>

        </div>
    </section>
  )
}

export default Qualifications