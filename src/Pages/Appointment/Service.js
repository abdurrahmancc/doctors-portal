import React from "react";
import PrimaryBtn from "../Share/PrimaryBtn/PrimaryBtn";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card lg:max-w-lg px-[80px] md:max-w-[400px] max-w-[435px]  mx-auto  bg-base-100 shadow-xl">
      <div className="card-body py-[42px]">
        <h2 className=" text-center text-secondary">{name}</h2>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : <span className="text-red-500">Try Another Date</span>}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p className="text-center">
          <span>price: ${price}</span>
        </p>
        <div className="card-actions justify-center ">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={!slots.length}
            className="btn  btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
