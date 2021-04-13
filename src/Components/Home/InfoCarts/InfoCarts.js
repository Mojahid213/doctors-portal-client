import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './infoCarts.css'


const InfoCarts = ({ info }) => {
  return (
    <div className="col-md-4 text-light px-1 py-2">
      <div className={`d-flex justify-content-center rounded-3 align-items-center info-${info.background} px-3 py-4`}>
        <div className="mx-2">
          <FontAwesomeIcon className="icon-size" icon={info.icon} />
        </div>
        <div className="mx-2">
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCarts;
