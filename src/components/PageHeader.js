import React from 'react'

function PageHeader({title}) {
    return (
        <div className="page__header">
            <div className="section__heading page__header-text">
                  <h1>{title}</h1>
                  <hr/>
            </div>
        </div>
    )
}

export default PageHeader
