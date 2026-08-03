import React, { useContext } from 'react'
import { userContext } from '../../context/UserContext'
import Navbar from './Navbar';
import DashboardForm from './DashboardForm';

const Dashboard = () => {
   const {login,user} = useContext(userContext); 
  return (
    <div className='h-screen w-full flex flex-col gap-8'>
          <div className='flex items-center mt-10 flex-col text-sm text-center p-3'>
            <h3 className='text-[#0f172a] font-smibold md:text-lg'>Analyze your resume. Get better. Get hired.</h3>
            <span className='text-[#64748b] text-center md:text-lg text-xs'>Upload your resume and provide the details below to genrate your ai report</span>
          </div>
          <div className='flex flex-col p-2 md:p-5'>
                <DashboardForm/>
          </div>
    </div>
  )
}
export default Dashboard