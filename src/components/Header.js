import React from 'react';
import {main} from '../data';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/5.jpg';

function Header() {
    const { header_text, bio} = main
    return (
        <>
        {/* <div className="header">
            <div className="header__content animate__animated animate__backInLeft ">
                 <div className="text-center">
                      <h1>{header_text}</h1>
                      <p className="mb-4">{bio}</p>
                      <a className="button" href="/contact">Learn More</a>
                 </div> 
            </div>
        </div> */}


        <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item img-gradient  active" data-interval="5000">
      <img src={img1} class="d-block w-100 carousel__header" alt="st-joseph-manor"/>
      <div class="carousel-caption">
            <div className="header__content animate__animated animate__backInLeft ">
                 <div className="text-center">
                      <h1>{header_text}</h1>
                      <p className="mb-4">{bio}</p>
                      <a className="button" href="/about">Learn More</a>
                 </div> 
            </div>
      </div>
    </div>
    <div class="carousel-item img-gradient" data-interval="5000">
      <img src={img2} class="d-block w-100 carousel__header" alt="st-joseph-manor"/>
      <div class="carousel-caption">
            <div className="header__content animate__animated animate__backInRight ">
                 <div className="text-center">
                      <h1>{header_text}</h1>
                      <p className="mb-4">{bio}</p>
                      <a className="button" href="/about">Learn More</a>
                 </div> 
            </div>
      </div>
    </div>
    <div class="carousel-item img-gradient" data-interval="5000">
      <img src={img3} class="d-block w-100 carousel__header" alt="st-joseph-manor"/>
      <div class="carousel-caption">
            <div className="header__content animate__animated animate__backInRight ">
                 <div className="text-center">
                      <h1>{header_text}</h1>
                      <p className="mb-4">{bio}</p>
                      <a className="button" href="/about">Learn More</a>
                 </div> 
            </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Header
