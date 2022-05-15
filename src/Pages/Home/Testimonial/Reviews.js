import React from "react";

const Reviews = ({ review }) => {
  return (
    <>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review.review}</p>
          <div className="flex  items-center mt-9">
            <div className="avatar">
              <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} alt="" />
              </div>
            </div>

            <div>
              <h2 className="card-title">{review.name}</h2>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
