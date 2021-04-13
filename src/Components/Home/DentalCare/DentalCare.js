import React from "react";
import dentalcare from "../../../images/DentalCare.png";
import "./DentalCare.css";

const DentalCare = () => {
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <div className="card mb-3" style={{ maxWidth: "1000px" }}>
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-4">
            <img src={dentalcare} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Exceptional Dental Care, On Your Terms</h1>
              <p className="card-text my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                laborum iste alias quas eos, ut aliquid debitis deserunt omnis
                tempore magnam excepturi! Rem saepe nulla expedita maiores, ex
                perferendis eveniet, excepturi debitis mollitia, ipsum
                recusandae nostrum fuga perspiciatis sit illum.tempore magnam excepturi! Rem saepe nulla expedita maiores, ex
                perferendis eveniet, excepturi debitis mollitia, ipsum
                recusandae nostrum fuga perspiciatis sit illum.
              </p>
              <button style={{backgroundColor:'#1CC7C1', fontWeight:'bold', color:'white'}} className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
