import React from 'react'
import AboutEmployment from '../components/AboutEmployment';
import CareOptions from '../components/CareOptions';
import Offers from '../components/Offers';
import PageHeader from '../components/PageHeader';
import Pricing from '../components/Pricing';
import RespiteCare from '../components/RespiteCare';

function Services() {
    return (
        <div>
             <PageHeader title="Services"/>
            <Offers/>
            <CareOptions/>
            <RespiteCare/>
            <Pricing/>
            <AboutEmployment/>
        </div>
    )
}

export default Services
