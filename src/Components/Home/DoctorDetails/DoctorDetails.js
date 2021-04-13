import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const DoctorDetails = ({ detail }) => {
  return (
    <div>
      <div class="col">
        <div class="card h-100">
          <img src={detail.image} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">{detail.name}</h5>
            <p class="card-text"><FontAwesomeIcon className="text-primary" icon={detail.icon} /> {detail.Phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
