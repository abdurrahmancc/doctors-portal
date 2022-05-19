import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Share/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();

  const { data: appointment, isLoading } = useQuery("payment", () =>
    axios(`https://whispering-dusk-64489.herokuapp.com/booking/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { Slot, date, number, patientEmail, patientName, price, treatment } = appointment?.data;
  const stripePromise = loadStripe(
    "pk_test_51L0Wy7JukytloPq3tBQgU5bh3thMtApZQDehJIejKVo60xbaIx5iwp9a1KLgG7JvuBDOLFin37UH3AdZlN4PTGx200T0fwpVJV"
  );
  return (
    <div>
      <h4>please pay for {id}</h4>
      <div class="hero min-h-fit mt-12 bg-base-200">
        <div class="hero-content flex-col lg:flex-col">
          <div class="text-center lg:text-left">
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Hello, {patientName}</h2>
                <p>Please Pay for {treatment}</p>
                <p>
                  Your Appointment <span className="text-orange-700">{date}</span>
                </p>
                <p>Please Pay ${price}</p>
              </div>
            </div>
          </div>
          <div class="card max-h-52 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment?.data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
