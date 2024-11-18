import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import { assets } from '../assets/assets'

const EditProfile = () => {
  return (
    <div className='white h-screen w-screen flex'>
      {/* left side bar  */}
      <div className='bg-gray-300 w-1/5 h-full'>
        <LeftSidebar />
      </div>

      {/* MAIN PROFILE SECTION  */}
      <div className='bg-white w-4/5 h-full p-16 flex flex-col gap-20'>
        <form className='pl-20 w-full flex flex-col gap-10'>
          <div className='flex gap-6'>
            <img src={assets.edit} alt="edit profile" height={35} width={35} />
            <h1 className='text-3xl font-semibold'>Edit Profile</h1>
          </div>

          <div className='flex gap-6  items-center'>
            <img src={assets.profile} alt="profile photo" height={100} width={100} />
            <p className='text-sm text-blue-500'>Change your Profile</p>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='text-sm font-semibold'>Name</label>
              <input type="text" id='name' className='p-2 ring-[1.5px] ring-gray-500  rounded-md outline-none' />
            </div>
            
            <div className='flex flex-col gap-2'>
            <label htmlFor="username" className='text-sm font-semibold'>Username</label>
            <input type="text" id='username' className='p-2 ring-[1.5px] ring-gray-500  rounded-md outline-none' />
            </div>

            <div className='flex flex-col gap-2'>
            <label htmlFor="bio" className='text-sm font-semibold'>Bio</label>
            <textarea name="bio" id="bio" rows={6}
              className='p-2 ring-[1.5px] ring-gray-500  rounded-md outline-none'>
              update the bio</textarea>
              </div>
          </div>
        </form>

        <div className='flex gap-6 justify-end'>
          <button className='bg-gray-500 text-white font-semibold pl-5 pr-5 p-2 rounded-md'>
            Cancel</button>
           <button className='bg-blue-400 text-black font-semibold pl-5 pr-5 p-2 rounded-md'>
            Update Profile</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile