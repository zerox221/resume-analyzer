import React from 'react'
import { motion } from 'framer-motion'

const Answers = ({data}) => {
  return (
     <motion.div 
    initial={{
        opacity: 0,
        height: 0,
        y: -10,
        filter: "blur(6px)",
      }}
      animate={{
        opacity: 1,
        height: "auto",
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        height: 0,
        y: -10,
        filter: "blur(6px)",
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1], 
      }}
     
     className="flex flex-col mt-4 gap-6">
        <div className="flex flex-col ">
          <span className="text-gray-600 text-xs tracking-wider font-medium">INTENSION</span>
          <span className="text-gray-500 text-sm">
            {
                data?.intention
            }
          </span>
        </div>
       
        <div className="flex flex-col ">
          <span className=" text-xs tracking-wider font-medium text-green-600">ANSWER</span>
          <span className="text-gray-500 text-sm">
            {
                data?.answer
            }
          </span>
        </div>
      </motion.div>
  )
}

export default Answers