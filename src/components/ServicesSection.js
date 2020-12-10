import React from 'react'
import {services} from '../data';

function ServicesSection() {
  
    return (
        <div className="section services">
           <div className="section__heading text-center">
               <h6>WHAT WE OFFER</h6>
               <h1> OUR SERVICES</h1>
               <hr className="centered"/>
           </div>
           <div className="services__contents row">
                 {services.map((service, index) => {
                     return(
                         <div key={index} className=" col-xs-12 col-sm-12 col-md-4">
                             <div className={ index % 2 !== 0 ? "service outService " : ` service`}>
                                <i class="fab fa-artstation fa-3x "></i>
                                <h3>{service.name}</h3>
                                <ul>
                                    {service.items.map((item, i) => {
                                        return(
                                            <li key={i}>{item}</li>
                                        )
                                    })}
                                </ul>

                                <a href="services#offers" className="button info-Btn">Details</a >
                             </div>
                            
                         </div>
                     )
                 })}


           </div>
        </div>
    )
}

export default ServicesSection
