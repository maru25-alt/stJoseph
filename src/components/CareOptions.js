import React from 'react'
import {care_options} from '../data';
import img from '../assets/bg.jpg'

function CareOptions() {
    return (
        <div id="care__options" className="section row care__options ">
            <div className="col-sm-12 col-md-3 section__heading">
                <h1>Care Options</h1> 
                <h6>RESIDENTS ARE SUPPORTED AND ENCOURAGED TO RESIDE AT THE MOST INDEPENDENT LEVEL OF CARE CONSISTENT WITH THEIR NEEDS AND SAFETY STANDARDS. EACH RESIDENT’S NEEDS ARE ASSESSED BY A PHYSICIAN OR REGISTERED NURSE WITHIN 72 HOURS OF ADMISSION. THE DIRECT CARE MANAGER ASSESSES THE RESIDENT PERIODICALLY.</h6>
                <hr/>
            </div>
            <div className="col-sm-12 col-md-3">
                <img src={img} alt="careOptions"/>
            </div>
            <div className="col-sm-12 col-md-6">
                {care_options.map((option, index) => {
                    return(
                        <div key={index} className="option row">
                            <div className="col-2">
                                <div className="bullets">⭐️</div>
                            </div>
                            <div className="col-10">
                                <h6>Level {option.level}</h6>
                                <h4> {option.name}</h4>
                                <p>{option.descriptions}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default CareOptions
