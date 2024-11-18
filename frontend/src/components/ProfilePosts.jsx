import React from 'react'
import { assets } from '../assets/assets'
import { postData } from '../assets/assets'

const ProfilePosts = () => {

  
  return (
   <>
    <div className='flex gap-14 bg-pink-100 p-6'>
       <div className='flex gap-2  rounded-md hover:bg-purple p-4 justify-center'>
         <img src={assets.posts} alt="post image" height={20} width={20} />
         <p className='text-sm font-semibold'>Posts</p>
       </div>

       <div className='flex gap-2 rounded-md hover:bg-purple p-4 justify-center'>
          <img src={assets.like} alt="liked posts" height={20} width={20} />
          <p className='text-sm font-semibold'>Liked Posts</p>
       </div>
    </div>
     <div className='relative w-full flex flex-wrap gap-2'>

        <div className='w-[250px] h-[250px] bg-gray-100 p-2 m-2 rounded-md'>
          <img src={postData[0].img} alt="post data" className='object-contain w-full h-full rounded-lg' />
          <img src={assets.liked} 
          className='absolute left-2 bottom-2'
          alt="like count of  the post"  height={25} width={25}/>
          <p className='absolute left-9 bottom-3 text-sm font-semibold'>30</p>
        </div>

     </div>
    </>
  )
}

export default ProfilePosts