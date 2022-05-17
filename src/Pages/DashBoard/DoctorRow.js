import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const DoctorRow = ({ doctor, index, refetch, setDeleteConfirmModal }) => {
  return (
    <>
      <tr class="hover">
        <th>{index + 1}</th>
        <td>
          <div class="avatar">
            <div class="w-8 rounded">
              <img src={doctor?.image} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
        </td>
        <td>{doctor?.name}</td>
        <td>{doctor?.specialty}</td>
        <td>
          <label
            onClick={() => setDeleteConfirmModal(doctor)}
            for="delete-confirm-modal"
            class="btn btn-error btn-sm"
          >
            DELETE
          </label>
          {/* <button onClick={() => handleDelete(doctor._id)} className="btn btn-error btn-sm">
            DELETE
          </button> */}
        </td>
      </tr>
    </>
  );
};

export default DoctorRow;
