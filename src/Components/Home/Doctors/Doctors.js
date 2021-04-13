import React from "react";
import doctor from "../../../images/DontorPic.png";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import "./Doctor.css";

const doctorDetail = [
  {
    image: doctor,
    name: "Dr.Boom",
    Phone: "+880 0188877787",
    icon: faPhoneAlt,
  },
  {
    image: doctor,
    name: "Dr.John",
    Phone: "+880 0188877787",
    icon: faPhoneAlt,
  },
  {
    image: doctor,
    name: "Dr.David",
    Phone: "+880 0188877787",
    icon: faPhoneAlt,
  },
];

const Doctors = () => {
  return (
    <section className="d-flex justify-content-center mt-5 pt-5">
      <div className="Doctor-container">
        <div className="text-center">
            <h5 style={{color:'#10CFE4'}}>Our Doctors</h5>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {doctorDetail.map((detail) => (
            <DoctorDetails detail={detail}></DoctorDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
