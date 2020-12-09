import React from 'react'
import AddTestimony from '../components/AddTestimony';
import PageHeader from '../components/PageHeader';
import TestimoniesSection from '../components/TestimoniesSection';

function Testionies() {
    return (
        <div>
             <PageHeader title="Testimonies"/>
            <TestimoniesSection bg={true}/>
            <AddTestimony/>
        </div>
    )
}

export default Testionies
