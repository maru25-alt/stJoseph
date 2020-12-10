import React from 'react';
import {pricing} from '../data'

function Pricing() {
    return (
        <div id="pricing" className="section pricing">
            <div className="section__heading text-center">
                <h6>Choose your package</h6>
                <h1>Our Pricing</h1>
                <hr className="centered"/>
            </div>
            <div className="pricing__container row">
                 {pricing.map((price, index) => <div key={index} className=" col-sm-12 col-md-4" >
                     <div className="price">
                     {price.level &&  <h6>Level {price.level}</h6>}
                     <h4>{price.name}</h4>
                    <h2> ${price.price} <span>  per day</span> </h2>
                    </div>
                 </div>)}
            </div>
        </div>
    )
}

export default Pricing
