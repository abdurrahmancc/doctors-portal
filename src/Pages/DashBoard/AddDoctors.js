import axios from "axios";
import { el } from "date-fns/locale";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Share/Loading/Loading";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/docservices").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    const imgStoreKey = "309363503ddfae2658a7350778e98cb0";
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    const result = await axios.post(url, formData);

    if (result.data.success) {
      const doctor = {
        name: data.name,
        email: data.email,
        specialty: data.specialty,
        image: result.data.data.display_url,
      };
      const doctorResult = await axios.post("http://localhost:5000/doctors", doctor, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (doctorResult.status === 200) {
        toast.success("doctor added successfully");
        reset();
      } else {
        toast.error("fail to add tha doctor");
      }
    }
  };

  return (
    <div>
      <h4 className="text-2xl text-center">add doctors</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="form-control w-full sm:min-w-[400px] min-w-[350px]  max-w-[500px] ">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full "
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="input input-bordered w-full "
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register("specialty")} class="select select-bordered w-full ">
            {services.map((service) => (
              <option>{service.name}</option>
            ))}
          </select>
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full sm:min-w-[400px] min-w-[350px]  max-w-[500px] ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full h-full pl-0 "
            {...register("photo", {
              required: {
                value: true,
                message: "Photo is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
            )}
          </label>
        </div>

        <input type="submit" value="Add" className="w-full  btn" />
      </form>
    </div>
  );
};

export default AddDoctors;
