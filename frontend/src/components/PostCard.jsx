import React, { useState } from 'react';
import { assets } from '../assets/assets';

const PostCard = ({ title, tags, img, initialLikes }) => {
   const [like, setLike] = useState(false);
   const [saved, setSaved] = useState(false);
   const [likes, setLikes] = useState(initialLikes); // Initialize likes as state

   const handleLike = () => {
      if (like) {
         setLikes((prevLikes) => prevLikes - 1);
      } else {
         setLikes((prevLikes) => prevLikes + 1);
      }
      setLike(!like);
   };

   const handleSaved = () => {
      setSaved(!saved);
   };

   return (
      <div className="bg-gray-300 rounded-lg p-4 flex flex-col gap-4">
         <div className="flex gap-2 items-center">
            <div>
               <img src={assets.profile} alt="profile" />
            </div>
            <div className="flex flex-col gap-0">
               <h1 className="text-lg font-semibold">Hobbit</h1>
               <p className="text-sm text-gray-500">
                  3 days ago{' '}
                  <span className="font-bold">.</span>
                  <span> America</span>
               </p>
            </div>
         </div>

         <div className="flex gap-1 flex-col w-full h-full">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm text-gray-500">{tags}</p>
            <div className="p-4">
               <img src={img} alt="post" className="w-full h-full object-contain rounded-lg" />
            </div>
         </div>

         <div className="flex justify-between p-2 pl-6 pr-6">
            <div
               className="flex gap-2 justify-center items-center cursor-pointer"
               onClick={handleLike}
            >
               <img
                  src={like ? assets.liked : assets.like}
                  alt="like button"
                  height={25}
                  width={25}
               />
               <p className="text-lg font-semibold">{likes}</p>
            </div>
            <img
               src={saved ? assets.saved : assets.save}
               alt="save button"
               height={25}
               width={25}
               className="cursor-pointer"
               onClick={handleSaved}
            />
         </div>
      </div>
   );
};

export default PostCard;
