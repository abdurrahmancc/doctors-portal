import { updateProfile } from "firebase/auth";
import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Hooks/Firebase";
import useToken from "../../Hooks/useToken";
import Loading from "../Share/Loading/Loading";

const Register = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, createUser, createLoading, createError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(gUser || user);

  let errorMessage;
  const from = location.state?.from?.pathname || "/";

  if (gLoading || createLoading || updating) {
    return <Loading></Loading>;
  }

  if (gError || createError || updateError) {
    errorMessage = <p className="text-red-500">{gError?.message || createError?.message}</p>;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log(data);
  };

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div style={{ height: `calc(100vh - 4rem)` }} className="flex   justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl font-bold text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter  password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message: "Provide a valid password",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                )}
              </label>
            </div>
            {errorMessage}
            <input type="submit" value="Sign Up" className="w-full max-w-xs btn" />
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-secondary">
                Login
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
