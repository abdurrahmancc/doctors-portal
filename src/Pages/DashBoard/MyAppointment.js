import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Hooks/Firebase";
import Loading from "../Share/Loading/Loading";

const MyAppointment = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    refetch,
    data: appointment,
  } = useQuery(["repoData", user], () =>
    fetch(`https://whispering-dusk-64489.herokuapp.com/bookings?patient=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 403 || res.status === 401) {
        localStorage.removeItem("accessToken");
        navigate("/");
        signOut(auth);
      }
      return res.json();
    })
  );

  if (error) {
    console.log(error);
  }

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center">my Appointments {appointment?.length}</h1>
      <div class="overflow-x-auto ">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
              <th className="text-center">Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {appointment &&
              appointment.map((a, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{a.patientName}</td>
                  <td>{a.date}</td>
                  <td>{a.Slot}</td>
                  <td>{a.treatment}</td>
                  <td>
                    {a.price && !a.paid && (
                      <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-success">pay</button>
                      </Link>
                    )}
                    {a.price && a.paid && <span className="text-success font-bold">paid</span>}
                  </td>
                  <td>
                    <span className="text-orange-500"> {a.transactionId}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
