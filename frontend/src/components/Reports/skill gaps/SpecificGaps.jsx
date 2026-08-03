import React from 'react'

const SpecificGaps = ({data}) => {
  const avtar = "Typescript"  
  const priority = {
    "low" : "bg-green-100 text-green-600",
    "medium" : "bg-yellow-100 text-yellow-600",
    "high" : "bg-orange-200 text-orange-400",
  }
  return (
    <div className='min-h-20 p-4 flex flex-col gap-2  w-full bg-[#ffffff]  border border-[#f2f3ff]  rounded-xl shadow-[0px_1px_3px_0px_#00000024] '>
        <div className='flex gap-3'>
            <div className='flex flex-col gap-1'>
                <span className='font-medium md:text-lg text-xs '>{data?.skill}</span>
                <span className={`${priority[data.severity]} w-fit text-[8px] md:text-[10px] font-medium rounded-md p-1 px-1`}>{data?.severity.toUpperCase()} PRIORITY</span>
            </div>
        </div>
    </div>
  )
}

export default SpecificGaps