import React from "react";
import './ServiceDetails.css'


const ServiceDetails = ({ details }) => {
  return (
    <div className="col-md-4">
      <div>
        <img src={details.img} className={`service-icons icon-${details.class}`} alt="" />
        <h5 className="my-3">{details.title}</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus et
          repudiandae, optio odio fuga ab. Officia totam eos quisquam cum!
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
