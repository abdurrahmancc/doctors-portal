import React from "react";

const InfoCard = ({ info }) => {
  return (
    <>
      <div className={`card lg:card-side max-w-[450px]  py-[20px] shadow-xl ${info.class}`}>
        <figure className="ml-6  ">
          <img src={info.img} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{info.title}</h2>
          <p>{info.des}</p>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
