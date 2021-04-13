import React from "react";
import './Testimonial.css'
import patient_1 from '../../../images/patient_1.png';
import patient_2 from '../../../images/patient_2.png';
import patient_3 from '../../../images/patient_3.png'
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";


const patients = [
    {
        name:'Mr.David',
        country:'United State',
        image:patient_1
    },
    {
        name:'Amanda',
        country:'Canana',
        image:patient_2
    },
    {
        name:'Emily Watson',
        country:'United Kingdom',
        image:patient_3
    }
]

const Testimonial = () => {
  return (
    <section className="testimonial-section d-flex justify-content-center">
      <div className="testimonial-container">
        <div className="mb-5">
          <h5 style={{ color: "#1CC7C1" }}>TESTIMONIAL</h5>
          <h1 style={{ color: "#3A4256" }}>What's our patient says</h1>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                patients.map(patient => <TestimonialDetails patient={patient}></TestimonialDetails>)
            }
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
