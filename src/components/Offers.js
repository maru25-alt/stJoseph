import React from 'react';
import {services} from '../data'

function Offers() {
    return (
        <div id="offers" className="section services">
            <div className="section__heading text-center">
                <h1>What we offers</h1>
                <hr className="centered"/>
            </div>
            <p className="text-center">Allied Home Health Care and Nursing Services, LLC is our on site Home Health Care Agency that offers Nursing Services, Physical Therapy, Occupational Therapy, Speech Therapy, Medical Social Services, Home Health Aides and Medical Supplies</p>
            <div className="row services__container">
                 {services.map((e, i )=> {
                     return (
                         <div key={i} className="service col-sx-6 col-md-4 text-center">
                               <i class="fab fa-artstation fa-3x "></i>
                               <h6>{e.name}</h6>
                               <ul>
                                   {e.items.map((item, index) => {
                                       return (
                                           <li key={index}>{item}</li>
                                       )
                                   })}
                               </ul>
                         </div>
                     )
                 })}
            </div>
        </div>
    )
}

export default Offers
