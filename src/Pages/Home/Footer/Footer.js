import React from "react";
import img from "../../../assets/images/footer1.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{ background: `url(${img})` }}
        className=" bg-center bg-no-repeat max-h-[407px] bg-cover mt-[74px]"
      >
        <div className="footer justify-items-center text-black p-10  ">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-center mt-28 mb-11">
            {" "}
            Copyright &copy; {new Date().getFullYear()} - Spread Team
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
