
import React from 'react'
import ContactSection from '../components/ContactSection';
import PageHeader from '../components/PageHeader';

function Contact() {
    return (
        <div>
            <PageHeader title="Contact Us"/>
           <ContactSection/>
           <div className="text-center">
           <iframe title="This is a unique title"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.0574017572726!2d-82.93055138513814!3d42.40522267918386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d5e742444325%3A0x55b5e8245b88ebd8!2sSt%20Joseph&#39;s%20Manor%20Hfallc!5e0!3m2!1sen!2sfr!4v1607696721546!5m2!1sen!2sfr"  height="600" frameBorder="0" style={{border: "0", width: "90vw"}} allowFullScreen="" aria-hidden={false} tabIndex="0"></iframe>
           </div>
           
        </div>
    )
}

export default Contact
