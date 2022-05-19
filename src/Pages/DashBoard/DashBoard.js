import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Hooks/Firebase";
import useAdmin from "../../Hooks/useAdmin";
import AddDoctors from "./AddDoctors";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <>
      <div class="drawer drawer-mobile lg:mx-[100px]">
        <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center ">
          <h1 className="text-3xl text-orange-500">DashBoard</h1>
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label htmlFor="dashboard-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/dashboard"}>DashBoard</Link>
            </li>
            <li>
              <Link to={"/dashboard/review"}>My Review</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to={"/dashboard/users"}>Users</Link>
                </li>
                <li>
                  <Link to={"/dashboard/adddoctors"}>Add Doctors</Link>
                </li>
                <li>
                  <Link to={"/dashboard/doctors"}>All Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
