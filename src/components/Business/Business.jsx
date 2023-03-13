import React from 'react'
import './Business.css'


export const Business = (props) => {
    return (<div className="Business">
        <div className="image-container">
            <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt='' />
        </div>
        <h2>{props.business.name}</h2>
        <div className="Business-information">
            <div className="Business-address">
                <p>{props.business.address}</p>
                <p>{props.business.city},{props.business.state}</p>
                <p>{props.business.zipCode}</p>
            </div>
            <div className="Business-reviews">
                <h3>{props.business.category}</h3>
                <h3 className="rating">{props.business.rating}</h3>
                <p>{props.business.reviewCount}</p>
            </div>
        </div>
    </div>)
}

