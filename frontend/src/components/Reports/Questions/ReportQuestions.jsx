import React, { useContext, useState } from "react";
import Questions from "./Questions";
import { userContext } from "../../../context/UserContext";
import { motion } from "framer-motion";

const ReportQuestions = () => {
  const [select, setSelect] = useState("technical");
  const { report } = useContext(userContext);
  const activeButton =
    "shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-indigo-500 bg-white  ";
  return (
    <div className="min-h-screen  font-sans w-full flex flex-col gap-4 p-5 bg-[#faf8ff]">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Interview Questions</h2>
        <p className="text-sm md:text-lg text-gray-500">
          Practise these questions to ace your interview.
        </p>
      </div>
      <div className="inline-flex items-center rounded-xl bg-gray-100 p-1 w-fit shadow-sm border border-gray-200">
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelect("technical")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
            select === "technical"
              ? "bg-white text-indigo-600 shadow-md"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          Technical
          <span
            className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
              select === "technical"
                ? "bg-indigo-100 text-indigo-600"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {report?.technicalQuestion?.length}
          </span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelect("behavioral")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
            select === "behavioral"
              ? "bg-white text-indigo-600 shadow-md"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          Behavioral
          <span
            className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
              select === "behavioral"
                ? "bg-indigo-100 text-indigo-600"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {report?.behavioralQuestion?.length}
          </span>
        </motion.button>
      </div>
      <div className="flex flex-col gap-4">
        {select === "technical" &&
          report?.technicalQuestion?.map((data, idx) => {
            return <Questions key={idx} data={data} />;
          })}
        {select === "behavioral" &&
          report?.behavioralQuestion?.map((data, idx) => {
            return <Questions key={idx} data={data} />;
          })}
      </div>
    </div>
  );
};

export default ReportQuestions;
