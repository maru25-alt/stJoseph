import React from 'react'
import {main} from '../data'

function Footer() {
    const {title,name, bio, telephone, address, email} = main;
    const date = new Date();
    return (
        <div className="footer">
           <div className="footer-top">
               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-4">
                       <h3>{title}</h3>
                      <p>{bio}</p>
                   </div>
                   <div className="col-xs-12 col-sm-6 col-md-2">
                       <h4>About Us</h4>
                       <hr/>
                       <ul>
                           <li>
                            {/* eslint-disable-next-line */}
                               <a href="/tour#tour">Site Tour</a>
                           </li>
                           <li>
                               <a href="/about#adminLetter">Administration Message</a>
                           </li>
                           <li>
                               <a href="/testimonies">Testimonies</a>
                            </li>
                           <li>
                               <a href="/services#employment">Employment Info</a>
                           </li>
                       </ul>
                   </div>
                   <div className="col-xs-12 col-sm-6 col-md-2">
                       <h4>Our Services</h4>
                       <hr/>
                       <ul>
                           <li>
                               <a href="/services#care__options">Care Options</a>
                           </li>
                           <li>
                               <a href="/services">Services</a>
                           </li>
                           <li>
                               <a href="/services#pricing">Pricing</a>
                           </li>
                       </ul>
                   </div>
                   <div className="col-xs-12 col-sm-6 col-md-2">
                       <h4>Contact Us</h4>
                       <hr/>
                       <ul>
                           <li>
                                <address>
                                    {address.name} <br/>
                                    {address.street}<br/>
                                    {address.city} {address.state} {address.zip}
                                </address>
                           </li>
                           <li>
                               <span>Email:</span>
                               <span>{email}</span>
                           </li>
                           <li>
                               <span>Telephone:</span>
                               <span>{telephone}</span>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
           <div className="footer-bottom">
               <p>{name} .All copyrights Reserved &copy; {date.getFullYear()}</p>
           </div>
        </div>
    )
}

export default Footer
