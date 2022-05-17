import axios from "axios";
import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Share/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const Doctors = () => {
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(null);
  console.log(deleteConfirmModal);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    axios.get("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h4>all doctors{doctors?.data?.length}</h4>
      <div class="overflow-x-auto sm:min-w-[400px] lg:min-w-[700px]  max-w-[1000px]">
        <table class="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>AVATAR</th>
              <th>NAME</th>
              <th>SPECIALTY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.data?.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                index={index}
                refetch={refetch}
                doctor={doctor}
                setDeleteConfirmModal={setDeleteConfirmModal}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteConfirmModal && (
        <DeleteConfirmModal
          refetch={refetch}
          setDeleteConfirmModal={setDeleteConfirmModal}
          deleteConfirmModal={deleteConfirmModal}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default Doctors;
