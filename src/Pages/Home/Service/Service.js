import React from "react";

const Service = ({ service }) => {
  return (
    <>
      <div className="card lg:max-w-lg  bg-base-100 mt-16 pt-11 pb-9  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={service.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title capitalize">{service.name}</h2>
          <p className="">{service.description}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
