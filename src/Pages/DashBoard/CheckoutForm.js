import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { el } from "date-fns/locale";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Share/Loading/Loading";
import MiniLoading from "../Share/Loading/MiniLoading";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const { price, patientName, patientEmail, _id } = appointment;
  const [loading, setLoading] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const { data, isLoading } = useQuery(["paymentPost", price], () =>
    axios.post(
      `https://whispering-dusk-64489.herokuapp.com/create-payment-intent`,
      { price },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(!loading);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess(" ");

    //confirm payment
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      data?.data?.clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      }
    );
    if (intentError) {
      setLoading(loading);
      setCardError(intentError?.message);
    } else {
      setLoading(loading);
      setCardError(" ");
      console.log(paymentIntent);
      setTransactionId(paymentIntent?.id);
      setSuccess("Congrats! your payment is success");
      const payment = {
        appointment: _id,
        transactionId: paymentIntent?.id,
      };
      const { data } = axios.patch(
        `https://whispering-dusk-64489.herokuapp.com/booking/${_id}`,
        { payment },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn-sm btn mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !data?.data?.clientSecret}
        >
          Pay
        </button>
      </form>
      {loading && <MiniLoading></MiniLoading>}
      {cardError && <p className="text-red-600 text-xs">{cardError}</p>}
      {success && (
        <div>
          <p className="text-green-600 text-xs text-xl">{success}</p>
          <p>
            Transaction ID: <span className="text-orange-500 ">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
