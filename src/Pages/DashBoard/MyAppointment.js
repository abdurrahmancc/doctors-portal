import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../Hooks/Firebase";
import Loading from "../Share/Loading/Loading";

const MyAppointment = () => {
  const [user, loading] = useAuthState(auth);
  // const [appointment, setAppointment] = useState([]);
  const navigate = useNavigate();

  /*   useEffect(() => {
    fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 403 || res.status === 401) {
          localStorage.removeItem("accessToken");
          signOut(auth);
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setAppointment(data));
  }, [user]); */

  const {
    isLoading,
    error,
    refetch,
    data: appointment,
  } = useQuery(["repoData", user], () =>
    fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
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

  if (user) {
    // refetch();
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
