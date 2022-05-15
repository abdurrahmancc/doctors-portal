import React from "react";
import chare from "../../../assets/images/chair.png";
import PrimaryBtn from "../../Share/PrimaryBtn/PrimaryBtn";

const Banner = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-no-repeat  bg-[url('/src/assets/images/bg.png')]">
        <div className="hero-content  flex-col gap-10 lg:flex-row-reverse ">
          <img src={chare} className="lg:max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the
            </p>
            <PrimaryBtn>get started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
