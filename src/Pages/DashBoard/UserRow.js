import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const handleAdmin = () => {
    fetch(`https://whispering-dusk-64489.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          toast.error("Failed to make an admin ");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfully make an admin");
        }
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={() => handleAdmin()} className="btn btn-sm">
              Create Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-sm">Remove User</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
