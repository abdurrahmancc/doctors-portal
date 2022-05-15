import React, { useState } from "react";
import Footer from "../Home/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
      <AvailableAppointment selected={selected}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
