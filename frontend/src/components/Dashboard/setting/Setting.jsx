import React from 'react'
import Profile from './Profile'
import Personal from './Personal'
import SignOut from './SignOut'

const Setting = () => {
  return (
    <div className='min-h-screen w-full flex flex-col font-sans gap-4 p-4 bg-[#faf8ff]'>
        <div className='flex flex-col gap-1'>
          <h1 className='font-medium text-xl md:text-2xl'>Profile Settings</h1>
          <span className='text-gray-500  text-sm md:text-lg '>Manage your personal information and security preference.</span>
        </div>
        <Profile/>
        <Personal/>
        <SignOut/>
    </div>
  )
}

export default Setting