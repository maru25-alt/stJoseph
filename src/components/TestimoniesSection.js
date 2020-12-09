import React from 'react'
import {testimony} from '../data';
import img from '../assets/testimonials.png'

function TestimoniesSection({bg}) {
    return (
        <div className="section testimonies__section " style={{background: bg ? "trasparent !important" : ""}}> 
           <div className="section__heading text-center">
               <h6>What our clients says</h6>
               <h1>Testimonies</h1>
               <hr className="centered"/>
           </div>
            <div className="testimonies row">
                {testimony.map((res, i) => {
                     return(
                       <div className=" col-xs-12 col-sm-6 col-md-4">
                         <div key={i} className="testimony ">
                               <img src={img} alt=""/>
                               <p>{res.comment}</p>
                               <h6>{res.usernane}</h6>
                         </div>
                    </div>  
                     )
                })}
            </div>
            <div className="text-center">
                <button className="button white-button ">View More</button>
            </div>

          
        </div>
    )
}

export default TestimoniesSection
