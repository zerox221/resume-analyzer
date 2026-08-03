import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex space-x-1">
        <div
          className="w-3 h-3 bg-black rounded-full animate-bounce"
        ></div>
        <div
          className="w-3 h-3 bg-black rounded-full animate-bounce"
        ></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};
export default Loader;
