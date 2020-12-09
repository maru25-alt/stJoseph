import React from 'react';
import {main} from '../data'

function Header() {
    const { header_text, bio} = main
    return (
        <div className="header">
            {/* <img src="https://demo.athemes.com/sydney/wp-content/uploads/sites/103/2019/12/Slider_image-1.png" alt="" /> */}
            <div className="header__content">
                 <div className="text-center">
                      <h1>{header_text}</h1>
                      <p className="mb-4">{bio}</p>
                      <a className="button" href="/contact">Learn More</a>
                 </div> 
            </div>
            
        </div>
    )
}

export default Header
