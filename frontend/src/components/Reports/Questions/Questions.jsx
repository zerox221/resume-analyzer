import { ChevronDown, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import Answers from "./Answers";
import { AnimatePresence , motion} from "framer-motion";

const Questions = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-15  p-4 flex font-sans flex-col gap-2  w-full bg-[#ffffff]  border border-[#f2f3ff]  rounded-xl shadow-[0px_1px_3px_0px_#00000024]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 ">
          <div className=" font-medium text-sm ">{data?.question}</div>
        </div>
        <div>
          <ChevronDown
            onClick={() => setShow(!show)}
            className={`${show ? "rotate-180 transition-all" : "rotate-0 transition-all"}  text-indigo-500`}
          />
        </div>
      </div>
    
        <AnimatePresence initial={false} mode="wait" initial={false}>
          {show && <Answers data={data} />}
        </AnimatePresence>
     
    </div>
  );
};

export default Questions;
