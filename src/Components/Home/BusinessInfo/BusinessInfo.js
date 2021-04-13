import React from 'react';
import InfoCarts from '../InfoCarts/InfoCarts';
import { faClock, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './BusinessInfo.css'

const infoDetail = [
    {
        title:'Opening Hours',
        description:'lorem ispur habi jabi jinish arki',
        icon: faClock,
        background:'primary'
    },
    {
        title:'Visit Out location',
        description:'Mirpur,Dhaka 1200 Bangladesh',
        icon: faMapMarkerAlt,
        background:'dark'
    },
    {
        title:'Contact Us Now',
        description:'+008 01874747474',
        icon:faPhoneAlt,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <div className="d-flex justify-content-center">
           <div className="row-custom-width row">
           {
                infoDetail.map(info => <InfoCarts info={info}></InfoCarts>)
            }
           </div>
        </div>
    );
};

export default BusinessInfo;