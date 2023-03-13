import React from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business';

export const BusinessList = (props) => {
    const displayBusiness = () => {
        return props.bus.map(business => {
            return <Business business={business} key={business.id} />
        });
    } 

    return (
        <div className="BusinessList">
            {
               displayBusiness
            }
        </div>
    )

}
export default BusinessList;