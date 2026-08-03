import React, { useContext } from 'react'
import { userContext } from '../../../context/UserContext'

const Profile = () => {
  const {user} = useContext(userContext);  
  return (
    <div className='min-h-15   p-4 flex font-sans items-center gap-3  w-full bg-[#ffffff]  border border-[#f2f3ff]  rounded-xl shadow-[0px_1px_3px_0px_#00000024]'>
        <div className='md:h-20 h-15 w-15 md:w-20 rounded-full bg-gray-500'>
            <img className='h-full w-full object-cover' src={user?.profile} alt="" />
        </div>
        <div className='text-xl font-medium'>
             {
                user?.name
             }
        </div>
    </div>
  )
}

export default Profile