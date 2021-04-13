import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{height:'500px'}} className="row m-0 d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{color:'#3A4256'}}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          laboriosam dicta porro dolorum deleniti molestias.At
          laboriosam dicta porro dolorum deleniti molestias.
        </p>
        <button className="btn btn-primary">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
