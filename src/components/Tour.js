import React from 'react';
import {amenities} from '../data'
import AmenityCard from './AmenityCard'

function Tour() {
    const size = 3
    return (
        <div id="tour" className="section tour__section">
            <div className="section__heading text-center">
                  <h6>Amenities</h6>
                  <h1>Take a look at  our facilities</h1>
                  <hr className="centered"/>
            </div>
            <div className="tours__container row">
                {
                    amenities.slice(0, size).map((amenity, index) => {
                        return(
                            <AmenityCard amenity={amenity} i={index} key={index} home={true}/>
                        )
                    })
                } 
                
            </div>
            
        </div>
    )
}

export default Tour
