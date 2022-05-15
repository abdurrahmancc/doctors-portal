import React from "react";

import img from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section style={{ background: `url(${img})` }} className="py-16 mt-36 max-h-[634px]">
      <div className="text-center">
        <h4 className="text-primary font-bold text-xl leading-6 capitalize mb-3">Contact Us</h4>
        <h4 className=" text-4xl leading-[110%] capitalize text-white">Stay connected with us</h4>
      </div>
      <div>
        <form action="" className="flex flex-col  mx-auto mt-10 max-w-[450px] min-w-[360px]">
          <input
            type="email"
            placeholder="email address"
            className="input capitalize input-bordered input-md w-full mb-5"
          />
          <input
            type="text"
            placeholder="subject"
            className="input input-bordered capitalize input-md w-full mb-5 "
          />

          <textarea
            placeholder="Your message"
            className="input input-bordered input-lg mb-9 h-36 w-full "
          />
          <div className="text-center">
            <input
              className="btn btn-primary  w-36 text-center uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
