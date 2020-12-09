import React from 'react';
import img from '../assets/respite-care.png'



function AboutSection() {
    return (
        <div className="section about__section">
           <div className="about__content row">
               <div className="col-sm-12 col-md-6">
                    <div className="section__heading">
                            <h6>Who we are</h6>
                            <h1>About Us</h1>
                            <hr/>
                    </div>
                    <h6>WE OFFER CARE AND COMPASSION IN ASSISTED LIVING</h6>
                    <p>
                         St. Joseph Manor is a community of loving people each with a lifelong story to share. We are located near interstate 94 in Detroit, Michigan. St. Joseph Manor is a senior assisted living community that offers the comfort of home with individual assistance in our facilities. Our motto at St. Joseph is to provide the best care, comfort, and compassion at affordable rates. We offer the independence you want and the services you need.
                    </p>
                    <a href="/about" className="btn button white-button">Read More</a>
               </div>
               <div className="col-sm-12 col-md-6">
                   <img src={img} alt="about us"/>
               </div>
           </div>
        </div>
    )
}

export default AboutSection
