import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import ProfileSection from '../components/ProfileSection'
import ProfilePosts from '../components/ProfilePosts'

const Profile = () => {
   return (
      <div className='white h-screen w-screen flex'>
         {/* left side bar  */}
         <div className='bg-gray-300 w-1/5 h-full'>
            <LeftSidebar />
         </div>

         {/* MAIN PROFILE SECTION  */}
         <div className='bg-white w-4/5 h-fulln p-16'>
         <ProfileSection/>
         <ProfilePosts/>
         </div>
      </div>
   )
}

export default Profile