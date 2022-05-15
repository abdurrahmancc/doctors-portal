import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  const prosInfo = [
    {
      title: "Opening Hours",
      des: "Lorem Ipsum is simply dummy text of the pri",
      class: "bg-gradient-to-r from-secondary to-primary",
      img: clock,
    },
    {
      title: "Opening Hours",
      des: "Brooklyn, NY 10036, United States",
      class: "bg-accent",
      img: marker,
    },
    {
      title: "Contact us now",
      des: "+000 123 456789",
      class: "bg-gradient-to-r from-secondary to-primary",
      img: phone,
    },
  ];

  return (
    <div className="grid gap-6 mx-auto w-[378px] md:w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <InfoCard info={prosInfo[0]}></InfoCard>
      <InfoCard info={prosInfo[1]}></InfoCard>
      <InfoCard info={prosInfo[2]}></InfoCard>
    </div>
  );
};

export default Info;
