import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Share/Loading/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState([]);

  const formatDate = selected && format(selected, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatDate], () =>
    fetch(`http://localhost:5000/available?date=${formatDate}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-4 max-w-[1373px] mx-auto">
      <h4 className="text-center text-secondary  text-2xl">
        Available Appointments on {selected && format(selected, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] mt-[100px] lg:grid-cols-3 ">
        {services.map((service) => (
          <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
          selected={selected}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
