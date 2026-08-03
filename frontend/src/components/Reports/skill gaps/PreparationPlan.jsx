import React, { useState } from "react";
import { ChevronDown, TurkishLira, Check, ChevronUp } from "lucide-react";
import PreparationTask from "./PreparationTask";
import { AnimatePresence, motion } from "framer-motion";

const PreparationPlan = ({data}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-15  p-4 flex font-sans flex-col gap-2  w-full bg-[#ffffff]  border border-[#f2f3ff]  rounded-xl shadow-[0px_1px_3px_0px_#00000024]">
      <div className="w-full flex justify-between">
        <div
          className={`flex ${show ? "flex-col gap-1" : "flex-row items-center gap-2"} `}
        >
          <span className="bg-indigo-200 w-fit text-indigo-500 font-bold text-xs md:text-sm p-1 px-2 rounded-md">
            Day {data?.day}
          </span>
          <span className="font-bold text-xs md:text-sm text-black/80">
          {show ?  data?.focus   :  `${data?.focus.substring(0,25)}...`}
          </span>
        </div>
        <div>
              <ChevronDown
              onClick={() => setShow(!show)}
              className={`text-gray-500 ${show ? "rotate-180 transition-all" : "rotate-0 transition-all"}`}
            />
        </div>
      </div>
    
    <AnimatePresence initial={false}>
  {show && (
    <motion.div
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        height: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="overflow-hidden flex flex-col gap-3"
    >
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ delay: 0.1 }}
        className="font-bold text-gray-400 text-sm"
      >
        TASKS
      </motion.span>

      {data?.tasks?.map((task, idx) => (
        <PreparationTask
          key={idx}
          task={task}
          index={idx}
        />
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default PreparationPlan;
