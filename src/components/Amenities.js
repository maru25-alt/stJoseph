import React from 'react';
import {amenities} from '../data'
import AmenityCard from './AmenityCard'

function Amenities() {
    return (
        <div className="section amenities">
            <div className="section__heading text-center">
                <h6> our perfect home</h6>
                <h1>Our BEST AMENITIES</h1>
                <hr className="centered"/>
            </div>
            <div className="tours__container row">
                {
                    amenities.map((amenity, index) => {
                        return(
                            <AmenityCard i={index} amenity={amenity} key={index} />
                        )
                    })
                } 
                
            </div>
        </div>
    )
}

export default Amenities
