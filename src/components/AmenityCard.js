import React from 'react'
//.jpg
function AmenityCard({amenity, home, i}) {
    const {image, name, description} = amenity;
    let imgSrc = require(`../assets/${image}`);
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 tour">
            <div className="imgtour__container">
               <img src={imgSrc.default} alt={name} />
               <div   className="badge">{home ?  <a href="/tour">READ MORE</a>  : name}</div>
            </div>
            <div className="tour__content">
                {home ? <h4>{name}</h4> :  <p>{description}</p>}
            </div>
            

        </div>
    )
}

export default AmenityCard
