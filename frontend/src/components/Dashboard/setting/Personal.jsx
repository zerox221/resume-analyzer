import React from "react";
import { Lock } from "lucide-react";
import ResetPasswordform from "./ResetPasswordform";
const Personal = () => {
  return (
    <div className="min-h-15  flex-col p-4 flex font-sans gap-5  w-full bg-[#ffffff]  border border-[#f2f3ff]  rounded-xl shadow-[0px_1px_3px_0px_#00000024]">
      <div className="flex gap-2 items-center border-b p-2 w-full border-gray-300">
        <span>
          <Lock className="text-green-700" size={20} />
        </span>
        <span className="md:text-xl text-sm font-medium">
          {" "}
          Security & password
        </span>
      </div>
        <ResetPasswordform/>
    </div>
  );
};

export default Personal;
