import React from 'react'

function AddTestimony() {
    return (
        <div className="section addTestimony">
            <div className="row">
                <div className="section__heading text-center col-sm-12 col-md-6">
                    <h6>Leave your testiomy here</h6>
                    <h1>Testify</h1>
                    <hr className="centered"/>
                </div>
                <form action="" className="col-sm-12 col-md-6">
                    <input className="form-input" type="text" placeholder="Your Name"/>
                    <textarea className="form-input"  placeholder="Type here..." rows="10"></textarea>
                    <button className="button info-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddTestimony
