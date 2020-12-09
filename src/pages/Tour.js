import React from 'react'
import Amenities from '../components/Amenities';
import PageHeader from '../components/PageHeader';
import Suits from '../components/Suits';

function Tour() {
    return (
        <div>
             <PageHeader title="Site Tour"/>
             <Suits/>
             <Amenities/>
        </div>
    )
}

export default Tour
