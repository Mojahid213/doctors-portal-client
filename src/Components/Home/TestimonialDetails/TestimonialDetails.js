import React from "react";

const TestimonialDetails = ({ patient }) => {
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <p className="card-text">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur excepturi necessitatibus delectus, voluptatum ex
              voluptas, facere placeat modi magni explicabo, id dignissimos
              similique. Suscipit tempora a, in consectetur iste ex, cupiditate
              facere eius amet sed iusto, earum architecto excepturi velit"
            </p>
          </div>
          <div class="card-footer border-top-0 bg-white p-2">
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <img src={patient.image} className="w-50" alt=""/>
                </div>
                <div  className="">
                    <span className="d-block" style={{color:'#10CFE4',fontSize:'15px',fontWeight:'bold'}}>{patient.name}</span>
                    <small>{patient.country}</small>
                </div>
            </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
