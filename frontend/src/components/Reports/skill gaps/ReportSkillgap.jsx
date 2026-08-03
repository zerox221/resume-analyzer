import React, { useContext } from "react";
import TotalSkillGaps from "./TotalSkillGaps";
import SpecificGaps from "./SpecificGaps";
import PreparationPlan from "./PreparationPlan";
import { userContext } from "../../../context/UserContext";

const ReportSkillgap = () => {
  const { report } = useContext(userContext);

  return (
    <div className="min-h-screen w-full flex flex-col gap-4 p-5 bg-[#faf8ff]">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Skill Gaps</h2>
        <p className="text-sm md:text-lg text-gray-500">
          Skills you should improve to better match the job requirements
        </p>
      </div>
      <div>
        <TotalSkillGaps />
      </div>
      <div className="flex flex-col gap-4">
      {report?.skillGap?.map((data, idx) => {
        return <SpecificGaps key={idx} data={data} />;
      })}
      </div>
      <div>
        <span className="font-sans font-semibold">Preparation Plan</span>
      </div>
      <div className="flex flex-col gap-3">
          {
            report?.preparationPlan?.map((data,idx)=>{
              return   <PreparationPlan  key={idx} data={data}/>
            })
          }
      </div>
  
    </div>
  );
};

export default ReportSkillgap;
