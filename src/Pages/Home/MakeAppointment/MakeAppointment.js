import React from "react";
import bgImg from "../../../assets/images/appointment.png";
import img from "../../../assets/images/doctor.png";
import PrimaryBtn from "../../Share/PrimaryBtn/PrimaryBtn";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <>
      <section className=" " style={{ background: `url(${bgImg})` }}>
        <div className="flex justify-center items-center">
          <div className="flex-1  hidden lg:block">
            <div className="flex justify-center">
              <img className="mt-[-200px] relative bottom-0 lg:h-[663px] " src={img} alt="" />
            </div>
          </div>
          <div className="flex-1 text-white lg:pr-28 py-[71px] px-7">
            <h3 className="text-primary text-xl mb-[22px] font-bold">Appointment</h3>
            <h3 className="text-4xl mb-[22px]">Make an appointment Today</h3>
            <p className="mb-[22px]">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page
            </p>
            <PrimaryBtn>get started</PrimaryBtn>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeAppointment;
