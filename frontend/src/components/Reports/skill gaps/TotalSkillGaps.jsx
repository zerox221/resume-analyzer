import React, { useContext } from 'react'
import { TriangleAlert } from 'lucide-react'
import { userContext } from '../../../context/UserContext'
const TotalSkillGaps = () => {
  const {report} = useContext(userContext);  
  return (
    <div className='min-h-20 p-4 gap-1  w-full bg-[#ffffff]  border border-[#f2f3ff] flex justify-between items-center rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
        <div className='flex flex-col text-xs md:text-sm'>
            <span className='text-neutral-600 font-medium'>Total skill gaps</span>
            <span className='text-gray-600'>Skill to improve</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='bg-orange-100 p-2 rounded-full'>
            <TriangleAlert className='text-orange-400' size={20} />
            </div>
            <span className='font-semibold text-3xl'>{report?.skillGap.length}</span>
        </div>
    </div>
  )
}

export default TotalSkillGaps