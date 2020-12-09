import React from 'react'
import Header from '../components/Header';
import Tour from '../components/Tour';

import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import TestimoniesSection from '../components/TestimoniesSection';

function Home() {
    return (
        <div className="home">
           <Header/>
           <Tour/>
           <AboutSection/>
            <ServicesSection/>
            <div className="testmonies__bg">
                  <TestimoniesSection/>
            </div>

           <ContactSection/>
        </div>
    )
}

export default Home
