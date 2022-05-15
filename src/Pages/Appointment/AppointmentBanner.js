import React, { useState } from "react";
import chare from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentBanner.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="hero min-h-screen bg-no-repeat bg-[url('/src/assets/images/bg.png')]">
        <div className="hero-content gap-32 flex-col lg:flex-row-reverse">
          <img src={chare} className="max-w-[594px] max-h-[355px] rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker mode="single" selected={selected} onSelect={setSelected} />
            {/* <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              monthsShown={1}
              inline
            />
            Available Appointments on {format(startDate, "PP")} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentBanner;
