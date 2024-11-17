import React from 'react'
import LeftSidebar from '../../components/LeftSidebar'
import PostCard from '../../components/PostCard'
import { postData } from '../../assets/assets'

const Home = () => {
   return (
      <div className='white h-screen w-screen flex'>

         {/* left side bar  */}
         <div className='bg-gray-300 w-1/5 h-full'>
            <LeftSidebar />
         </div>


         {/* MIDDLE POST AREA  */}
         <div className='bg-yellow-100 w-3/5 h-full p-20 overflow-scroll scrollbar-hide flex flex-col gap-8'>
            {postData.map((item, index) => (
               <PostCard title={item.title} tags={item.tags} img={item.img} initialLikes = {item.like}/>
            ))}
         </div>


         {/* RIGHT SIDE BAR  */}
         <div className='bg-white w-2/5 h-full'>right</div>
      </div>
   )
}

export default Home