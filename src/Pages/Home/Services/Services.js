import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "fluoride freatment",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 2,
      name: "cavity filling",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
  ];
  return (
    <div className="mt-32">
      <div className="text-center">
        <h2 className="uppercase text-primary text-xl font-bold ">our services</h2>
        <p className="capitalize text-4xl leading-10">services we provide</p>
      </div>
      <div className="grid sm:grid-cols-1 gap-[34px] md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
