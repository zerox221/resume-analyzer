import React from "react";
import { LogOut } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const SignOut = () => {
  const navigate = useNavigate();
  async function logoutHandler() {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/v1/auth/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      navigate("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-15   p-4 flex font-sans items-center gap-3  w-full bg-[#ffffff]  border border-[#f2f3ff]  rounded-xl shadow-[0px_1px_3px_0px_#00000024]">
      <div className="bg-red-200 rounded-full p-2">
        <LogOut size={20} className="text-red-700" />
      </div>
      <span onClick={logoutHandler} className="text-red-700 font-semibold">
        Log out
      </span>
    </div>
  );
};

export default SignOut;
