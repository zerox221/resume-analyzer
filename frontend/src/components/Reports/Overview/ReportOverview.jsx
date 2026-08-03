import React from 'react'
import OverallScore from './OverallScore'
import Questions from './Questions'
import Skillgaps from './Skillgaps'

const ReportOverview = () => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-4 p-5 bg-[#faf8ff]'>
        <div className=''>
            <h2 className='text-xl font-semibold'>Analysis Overview</h2>
            <p className='text-sm text-neutral-400'>here is how your profile matches the target role and your roadmap to success</p>
        </div>
        <div>
          <OverallScore/>
        </div>
        <div className='flex md:flex-row flex-col gap-3 md:gap-5'>
          <Questions questionType={"behavioralQuestion"}/>
          <Questions questionType={"technicalQuestion"}/>
        </div>
        <div>
          <Skillgaps/>
        </div>
        <div>
         
        </div>
    </div>
  )
}

export default ReportOverview