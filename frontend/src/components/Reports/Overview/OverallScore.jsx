import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { userContext } from "../../../context/UserContext";

const OverallScore = () => {
  const { report } = useContext(userContext);

  const percentage = report?.matchScore;

  return (
    <div className="min-h-20 p-4 gap-1 flex-col w-full bg-[#ffffff]  border border-[#f2f3ff] flex justify-center items-center rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div>
        <CircularProgressbar
          className="md:h-35 md:w-35 h-25 w-25 font-bold  "
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathTransitionDuration: 1,
            pathColor: `#4f46e5`,
            textColor: "black",
          })}
        />
      </div>
      <div className="text-center text-sm text-neutral-400">{report?.message}</div>
    </div>
  );
};

export default OverallScore;
