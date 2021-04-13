import React from "react";
import "./Appointment.css";
import doctorpic from "../../../images/DontorPic.png";

const Appointment = () => {
  return (
    <div className="appointment-main mt-5 d-flex justify-content-center align-items-center">
        <div className="appointment-container">
      <div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 m-0 p-0">
            <div>
            <img src={doctorpic} alt="doctor" />
            </div>
          </div>
          <div className="col-md-7 appointment-detail">
            <div className="m-5 py-4 px-4">
            <h5 style={{color:'#1CC7C1'}}>APPOINTMENT</h5>
            <h1>Make an appointment Today</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum laudantium a, nobis esse dolore laborum consequuntur
              quae optio tenetur omnis rerum! Molestiae aspernatur illum.
            </p>
            <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Appointment;
