import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Reviews from "./Reviews";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      location: "California",
    },
  ];
  return (
    <section className="mt-20">
      <div className="flex justify-between mb-20 items-center">
        <div>
          <h3 className="capitalize text-primary font-bold text-xl leading-6">testimonial</h3>
          <h3 className="capitalize text-4xl">What Our Patients Says</h3>
        </div>
        <div>
          <img className="lg:w-48 lg:h-40  w-24 h-20" src={quote} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
