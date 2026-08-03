import React, { useContext } from "react";
import { userContext } from "../../../context/UserContext";
import { AlertTriangle, CircleAlert, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const Skillgaps = () => {
  const { report } = useContext(userContext);

  const severity = {
    high: {
      bg: "bg-red-50",
      text: "text-red-600",
      border: "border-red-200",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    medium: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      border: "border-yellow-200",
      icon: <CircleAlert className="w-4 h-4" />,
    },
    low: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      icon: <CircleCheck className="w-4 h-4" />,
    },
  };

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-gray-800">
          Skill Gaps
        </h2>

        <span className="text-xs text-gray-400">
          {report?.skillGap?.length || 0} Skills
        </span>
      </div>

      <div className="space-y-3">
        {report?.skillGap?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.01,
            }}
            className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition"
          >
            <span className="font-medium text-gray-700">
              {item.skill}
            </span>

            <span
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold capitalize
              ${severity[item.severity].bg}
              ${severity[item.severity].text}
              ${severity[item.severity].border}
              border`}
            >
              {severity[item.severity].icon}
              {item.severity}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skillgaps;