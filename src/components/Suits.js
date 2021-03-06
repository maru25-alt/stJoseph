import React from 'react'
import {private_suits} from '../data'

function Suits() {
    return (
        <div className="suits section">
            <div className="section__heading text-center">
                <h6>Take a look at our home</h6>
                <h1>Our Private Suits</h1>
                <hr className="centered"/>
            </div>
            <div className="suits__container row">
                 {private_suits.map((e, i) => 
                    <div key={i} className="col-xs-12 col-sm-6 col-md-4 suit" >
                        <div className="img__container">
                            <img className="image" src={require(`../assets/${e.image}`).default} alt=""/>
                              <div className="middle">
                              <button style={{background: i%2 === 0 ? "#6fda44" : ""}} className="button info-button px-5 py-4">{e.name}</button>
                              </div>
                             
                        </div>
                    </div>
                 )}
            </div>
        </div>
    )
}

export default Suits
