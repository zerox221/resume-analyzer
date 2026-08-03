import { div } from "framer-motion/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RotateCw } from "lucide-react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import toast from "react-hot-toast";
const ResetPasswordform = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submithandler(data) {
    setLoading(true);
    try {
      const response = await axios.put(
        `${BASE_URL}/api/v1/user/change/password`,
        data,
        {
          withCredentials: true,
        },
      );
      console.log(response);
      toast.success("Your password has been updated successfully.");
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
    reset();
    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submithandler)}
    >
      <div className="flex flex-col gap-1">
        <label
          className="text-xs font-normal text-gray-500"
          htmlFor="currentPassword"
        >
          Current password
        </label>
        <input
          {...register("password", {
            required: "*Required",
          })}
          id="password"
          type="password"
          placeholder="Current password"
          className="border border-[#cbd5e1] text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none hover:border-[#7c3aed]  rounded-md p-3"
        />
        {errors.password && (
          <span className="text-xs text-red-600">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            className="text-xs font-normal text-gray-500"
            htmlFor="newPassword"
          >
            New password
          </label>
          <input
            {...register("newPassword", {
              required: "*Required",
              minLength: {
                value: 4,
                message: "password should contain more then 4 characters",
              },
            })}
            id="newPassword"
            type="password"
            placeholder="Enter new password"
            className="border border-[#cbd5e1] text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none hover:border-[#7c3aed]  rounded-md p-3"
          />
          {errors.newPassword && (
            <span className="text-xs text-red-600">
              {errors.newPassword.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-xs font-normal text-gray-500"
            htmlFor="confirmPassword"
          >
            Confirm New password
          </label>
          <input
            {...register("confirmNewPassword", {
              required: "*Required",
            })}
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            className="border border-[#cbd5e1] text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none hover:border-[#7c3aed]  rounded-md p-3"
          />
          {errors.confirmNewPassword && (
            <span className="text-xs text-red-600">
              {errors.confirmNewPassword.message}
            </span>
          )}
        </div>
        {loading
          ? "🔒 Changing Password..."
          : error && <div className="text-sm text-red-600">{error}</div>}

        <div className="w-full flex items-center justify-end">
          <button className="p-2 bg-indigo-600 text-white rounded-md text-xs items-center md:text-sm gap-2 flex">
            {" "}
            <RotateCw size={20} /> Update password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPasswordform;
