import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
   <section className="contact-section d-flex justify-content-center">
      <div className="contact-div">
        <div className="contact-info">
            <div className="text-center pt-5">
              <div className="contact-text">
                  <h5 style={{color:'#11D0DF'}}>CONTACT US</h5>
                  <h1 className="text-light">Always Connect with Us</h1>
              </div>
              <div className="contact-form d-flex justify-content-center">
                <form action="" className="w-50 mt-5">
                <input type="email" className="form-control my-2" name="email" id="email" placeholder="your email"/>
                <input type="text" className="form-control my-2" name="subject" id="subject" placeholder="write a subject"/>
                <textarea name="message" className="form-control" rows="5">Enter message here...</textarea>

                </form>
              </div>
            </div>
        </div>
      </div>
   </section>
  );
};

export default Contactus;
