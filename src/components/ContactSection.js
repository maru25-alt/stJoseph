import React from 'react'
import {main} from '../data';


function ContactSection() {
    const {address, telephone, email, fax} = main
    return (
        <div className="section contact__section">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="section__heading">
                        <h6>Get in Touch with us</h6>
                        <h1>Contacts</h1>
                        <hr/>
                    </div>
                    <div className="contact__content">
                        <div className="contact__item">
                            <h6 className="title">Phone</h6>
                            <p>{telephone}</p>
                        </div>
                        <div className="contact__item">
                            <h6 className="title">Fax</h6>
                            <p>{fax}</p>
                        </div>
                        <div className="contact__item">
                            <h6 className="title">Email</h6>
                            <p>{email}</p>
                        </div>
                        <div className="contact__item">
                            <h6 className="title">Address</h6>
                            <p>{address.name} <br/> {address.street} <br/> {address.city}, {address.zip}</p>
                        </div>

                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h6  className="title ">Send A Message</h6>
                    <form action="" className="contact__form">
                         <input placeholder="Your Name" className="form-input" type="text"/>
                         <input placeholder="Your Email" className="form-input" type="email"/>
                         <input type="tel" placeholder="Your Telephone" className="form-input"/>
                         <textarea name="" placeholder="Message" className="form-input" rows="10"></textarea>
                         <button className="button info-button" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
