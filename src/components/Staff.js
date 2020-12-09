import React from 'react';
import {staff} from '../data';
import profile from '../assets/serving-seniors.png'

function Staff() {
    return (
        <div className="section staff">
             <div className="section__heading text-center">
                  <h6>Meet our team</h6>
                  <h1>Staff</h1>
                  <hr className="centered"/>
             </div>
             <div className="row">
                 {staff.map((e,i) => 
                   <div key={i} className="col-xs-12 col-sm-6 col-md-3 staff__member">
                       <img src={profile} alt="staff member"/>
                       <h6>{e.name}</h6>
                       <div>{e.position}</div>
                       <ul>
                           {e.socials.map((s, index) => 
                             <a className="socials" key={index} href={s.url}>
                                   <i  className={s.className}></i>
                                   
                             </a>
                             
                           )}
                       </ul>
                      
                   </div>
                 )}
             </div>
        </div>
    )
}

export default Staff
