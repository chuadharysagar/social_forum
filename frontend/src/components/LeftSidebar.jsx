import React from 'react'
import { assets } from '../assets/assets'
import { menuData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const LeftSidebar = () => {
    // navigate to the profile page 
    const navigate  = useNavigate();

    const handleClick = ()=>{
        navigate("/profile");
    }

    const handleMenuClick =(path)=>{
      navigate(`${path}`);
    }



   return (
      <div className='h-full w-full flex flex-col items-center gap-10 pt-6'>
         <div>
            <img src={assets.logo} alt="logo photo" height={240} width={240} />
         </div>

         <div onClick={handleClick}
         className='flex w-[245px] p-4 gap-4 rounded-md justify-start cursor-pointer'>
            <div>
               <img src={assets.profile} alt="profile picture" height={60} width={60} />
            </div>
            <div className='flex flex-col items-center justify-center'>
               <h1 className='text-xl font-bold'>Sagar</h1>
               <p className='text-sm text-gray-600 font-semibold'>@Sagar</p>
            </div>
         </div>


         {
            menuData.map((item, index) => (
               <div key={index} onClick={()=>handleMenuClick(item.path)}
               className='flex w-[245px] p-4 gap-4 pl-6
              rounded-md justify-start cursor-pointer hover:bg-purple hover:text-gray-300'>
                  <div>
                     <img src={item.img} alt={item.altText} height={30} width={30}/>
                  </div>

                  <h1 className='text-lg font-semibold'>{item.label}</h1>
               </div>

            ))
         }
      </div>
   )
}

export default LeftSidebar