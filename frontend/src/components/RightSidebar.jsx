import React from 'react'
import { assets } from '../assets/assets'
import { topCreaterData } from '../assets/assets'

const RightSidebar = () => {
   return (
      <div className='bg-gray-200 w-full h-full p-10 flex gap-16 flex-col'>
         <h1 className='text-3xl font-bold'>Top Creaters</h1>

         <div className='flex flex-wrap gap-6'>

            {/* follow profile postcard  */}
            {topCreaterData.map((item, index) => (
               <div key={index} className='flex flex-col items-center w-[215px] h-[250px] bg-gray-400 rounded-lg p-4 justify-evenly'>
                  <img src={assets.profile} alt="profile image" height={70} width={70} />
                  <h1 className='text-xl font-semibold'>{item.Name}</h1>
                  <p className='text-sm text-gray-500'>{item.userName}</p>
                  <button className='bg-purple pl-6 pr-6 pt-2 pb-2 font-semibold rounded-md'>Follow</button>
               </div>
            ))}
         </div>
      </div>
   )
}

export default RightSidebar