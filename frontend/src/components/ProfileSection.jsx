import React from 'react' 
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ProfileSection = () => {
    const navigate = useNavigate();


   
  return (
    <div className='flex gap-10 bg-pink-100 p-10'>
      <div className='h-[120px] w-[120px] rounded-full'>
         <img src={assets.profile} alt="profile image" className='w-full h-full object-contain'/>
      </div>

      <div className='flex-1 flex flex-col gap-1'>
        <div className='flex justify-between'>
         <h1 className='text-5xl font-semibold'>Sagar Chaudahry</h1>
         <button onClick={()=> navigate('/editprofile')}
         className='bg-gray-600 rounded-md p-1 pl-4 pr-4 flex flex-row items-center gap-2 text-white'>
            <img src={assets.edit} alt="edit profile" height={20} width={20}/>
            <span className='text-sm'>Edit profile</span>
         </button>
        </div>

        <div className='flex flex-col justify-center gap-6 h-full'>
          <p className='text-gray-500'>@Sagar_chaudhari</p>
          <p className='font-semibold'>Bio section : Lorem ipsum dolor sit.</p>
          <div className='flex gap-6'>
             <p  className='font-semibold'><span className='text-purple '>20</span> {' '}Posts</p>
             <p className='font-semibold'><span className='text-purple '>34</span>{' '}Followers</p>
             <p className='font-semibold'><span className='text-purple '>50</span>{' '}Following</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection