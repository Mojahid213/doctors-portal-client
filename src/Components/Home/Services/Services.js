import React from "react";
import Fluoride from '../../../images/flouride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import ServiceDetails from "../ServiceDetails/ServiceDetails";


const servicesInfo = [
    {
        title:'Fluoride Treatment',
        img: Fluoride,
        class:'increase'
    },
    {
        title:'Cavity Filling',
        img: Cavity,
        class:''
    },
    {
        title:'Teeth Whitening',
        img: Whitening,
        class:''
    }
]


const Services = () => {
  return (
    <div>
      <div className="text-center mt-5 pb-5 pt-5">
        <h4 style={{color:'#1CC7C1'}}>OUR SERVICES</h4>
        <h2 style={{color:'#3A4256', fontWeight:'bold'}}>Services We Provide</h2>
      </div>
      <div className="text-center d-flex justify-content-center mt-5">
         <div className="row" style={{width:'80%'}}>
         {
              servicesInfo.map(details => <ServiceDetails details={details}></ServiceDetails>)
          }
         </div>
      </div>
    </div>
  );
};

export default Services;
