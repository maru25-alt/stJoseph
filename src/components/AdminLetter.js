import React from 'react'
import letter from '../assets/letter.png'

function AdminLetter() {
    return (
        <div id="adminLetter" className="section letter">
            <div className="section__heading text-center">
                <h1>Message from our Adminstrator</h1>
                <hr className="centered"/>
            </div>
            <div className="text-center">
                <img src={letter} alt=""/>
                
            </div>
        </div>
    )
}

export default AdminLetter
