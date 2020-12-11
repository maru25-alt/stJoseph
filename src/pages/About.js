import React from 'react'
import AboutUs from '../components/About';
import AdminLetter from '../components/AdminLetter';
//import Staff from '../components/Staff';
import PageHeader from '../components/PageHeader';

function About() {
    return (
        <div>
             <PageHeader title="About Us"/>
            <AboutUs/>
            {/* <Staff/> */}
            <AdminLetter/>

        </div>
    )
}

export default About
