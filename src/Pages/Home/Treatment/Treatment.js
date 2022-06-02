import React from "react";
import img from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../Share/PrimaryBtn/PrimaryBtn";

const Treatment = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen ">
        <div className="hero-content gap-24 flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold capitalize">
              exceptional dental care, on your terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page
            </p>
            <PrimaryBtn>get started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
