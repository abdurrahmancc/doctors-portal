import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Review from "./Pages/Review/Review";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Pages/Share/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import { Toaster } from "react-hot-toast";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppointment from "./Pages/DashBoard/MyAppointment";
import MyReview from "./Pages/DashBoard/MyReview";
import Users from "./Pages/DashBoard/Users";
import RequireAdmin from "./Hooks/RequireAdmin";
import AddDoctors from "./Pages/DashBoard/AddDoctors";
import Doctors from "./Pages/DashBoard/Doctors";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="adddoctors"
            element={
              <RequireAdmin>
                <AddDoctors></AddDoctors>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="doctors"
            element={
              <RequireAdmin>
                <Doctors></Doctors>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
