import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { File, Loader } from "lucide-react";
import axios from "axios";
import { userContext } from "../../../context/UserContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser  } = useContext(userContext);
  const [loading,setloading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitHandler(data) {
    setloading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/register`,
        data,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      setErrorMessage(false);
      reset();
      if (response.data.success) {
        navigate("/");
        setUser(response.data.user);
      }

    } catch (error) {
      console.log(error.response?.data || error.message);
      setErrorMessage(error.response?.data.message);
    }
    finally{
      setloading(false);
    }

    reset();
  }

  return (
    <div className=" w-80 p-5 py-8 border bg-[#ffffff ] border-[#d1d5db] rounded-md">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div>
          <span className="text-xl items-center mb-3 flex gap-1 font-semibold">
            <File size={20} />
            Resume Pro
          </span>
          <p className="text-[#0a192f] text-sm">
            Join thousands of professionals optimizing their trajectory
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-black font-semibold" htmlFor="name">
            FULL NAME
          </label>
          <input
            className="p-2 border border-[#d1d5db] outline-none text-sm text-[#4b5563] rounded-md"
            id="name"
            type="text"
            placeholder="Alexander hamilton"
            {...register("name", {
              required: "name is required",
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
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
            <span className="text-sm text-red-600">{errors.email.message}</span>
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
              required: "This is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
        </div>
        {errorMessage && (
          <div className="text-sm text-red-600">{errorMessage}</div>
        )}
        <div className="mt-5">
          <button className={` ${loading ?"bg-[#363636] disabled: ": "bg-[#000000]"} w-full p-2 font-smibold text-[#ffffff]`}>
            Create account
          </button>
        </div>
        <div>
          <span className="text-sm">
            Already have an account ?{" "}
            <Link to={"/login"} className="text-blue-500 underline">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
