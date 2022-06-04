import React from "react";
import ScrollTopBtn from "../../Share/ScrollTopBtn";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <ScrollTopBtn />
      <Footer></Footer>
    </div>
  );
};

export default Home;
