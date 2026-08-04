import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userContext } from "../../../context/UserContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { setUser} = useContext(userContext);

  const [loading,setLoading] = useState(false);

  async function submitHandler(data) {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/login`,
        data,
        {
          withCredentials: true,
        },
      );
      console.log(response.data.user);
      if (response.data.success) {
        setUser(response.data.user);
        navigate("/");
        
      }
      reset();
   
    } catch (error) {
      console.log(error?.response);
      setError(error.response?.data.message);
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className=" w-80 p-5 py-8 border bg-[#ffffff ] border-[#d1d5db] rounded-md">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div>
          <span className="text-xl font-semibold">Welcome Back</span>
          <p className="text-[#0a192f] text-sm">
            Sign in to continue your career journey
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-black font-semibold" htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className="p-2 border border-[#d1d5db] outline-none text-sm text-[#4b5563] rounded-md"
            type="email"
            id="email"
            placeholder="name@gmail.com"
            {...register("email", {
              required: "email is required",
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-xs text-black font-semibold"
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input
            className="p-2 border text-sm border-[#d1d5db] outline-none  text-[#4b5563] rounded-md"
            type="password"
            id="password"
            placeholder="Enter password"
            {...register("password", {
              required: "password is required",
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <div className="mt-5">
          <button className={`${loading ?"bg-[#363636] disabled: ": "bg-[#000000]"} w-full p-2 font-smibold text-[#ffffff]`}>
            LOGIN
          </button>
        </div>
        <div>
          <span className="text-sm">
            Dont have an account{" "}
            <Link to={"/signup"} className="text-blue-500 underline">
              Sign'in
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
