import React, { useEffect } from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/Firebase";
import Loading from "../Share/Loading/Loading";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { name, slots, _id } = treatment;

  const formattedDate = format(selected, "PP");

  const handleForm = (e) => {
    e.preventDefault();
    const Slot = e.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      Slot,
      patientEmail: user?.email,
      patientName: user?.displayName,
      number: e.target.number.value,
    };

    fetch("https://whispering-dusk-64489.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`appointment is set ${formattedDate} at ${Slot} `, {
            id: "bookingSuccess",
          });
        } else {
          toast.error(
            `already have an appointment is set ${data.booking?.date} at ${data.booking.slots}`,
            { id: "bookingFail" }
          );
        }
      });
    refetch();
    setTreatment(null);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-[25rem] relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <form
            onSubmit={handleForm}
            className="grid grid-cols-1 justify-items-center gap-[23px] mt-12"
          >
            <input
              type="text"
              name="date"
              value={selected && format(selected, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots?.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              value={user ? user?.email : ""}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value={"Submit"}
              className="input input-bordered w-full max-w-xs btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
