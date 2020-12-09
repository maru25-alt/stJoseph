import React from 'react'
import { NavLink } from 'react-router-dom'
import {routes} from '../routes'
import logo from '../assets/st-joseph-logo.jpg'


function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">
            <img src={logo} alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                    {routes && routes.map(link =>  {
                        return (
                            <li key={link.route}  className="nav-item ">
                                <NavLink activeStyle={{ color: ' #46237a' }} className="nav-link"to={link.route}>{link.name}</NavLink>
                            </li>
                        )
                    }
                    )}
            </ul>
        </div>
      </nav>
    )
}

export default Navigation
