import React from 'react'
import {about} from '../data'
import img from '../assets/aging-in-place.jpg'


function About() {
    return (
        <div className="aboutus section ">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="section__heading">
                        <h6>Who we are</h6>
                        <h1>About us</h1>
                        <hr />
                    </div>
                    {about.map((e, i )=> <p key={i}>{e}</p>)}
                </div>
                <div className="col-sm-12 col-md-6 image__container">
                     <img src={img} alt=""/>
                   </div>
            </div>
           
        </div>
    )
}

export default About
