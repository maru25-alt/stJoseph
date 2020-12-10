import React from 'react'
import img from '../assets/6.png'
import {respite_care} from '../data'

function RespiteCare() {
    return (
        <div className="section respite__care">
           <div className="row">
                 <div className="col-sm-12 col-md-6">
                       <div className="section__heading">
                           <h1>Respite Care</h1>
                           <hr/>
                       </div>
                       <p>{respite_care.description}</p>
                       <ul>
                           {respite_care.services.map((service, index) => {
                               return(
                                   <li key={index}> <i class="fas fa-bullseye-pointer    "></i> {service} </li>
                               )
                           })}
                       </ul>
                 </div>
                 <div className="col-sm-12 col-md-6 img__container">
                     <img src={img} alt=""/>
                 </div>
           </div>
        </div>
    )
}

export default RespiteCare
