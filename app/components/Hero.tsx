import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
     <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
      <div className=" w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3 ">
      {/* <h1 className='font-extrabold text-5xl cursor-pointer hover:animate-pulse'>I AM NIGHAT ZAHRA</h1> */}
        
         <h1 className='font-extrabold text-5xl cursor-pointer hover:animate-pulse mt-14'>I AM</h1>
        <h1 className='font-extrabold text-5xl cursor-pointer hover:animate-pulse mt-7'>NIGHAT</h1>
        <h1 className='font-extrabold text-5xl cursor-pointer hover:animate-pulse mt-7'>ZAHRA</h1>
      </div>  
      <div className='relative'>
      <Image src={"/profile3.jpg.webp"} className="w-[400px] mr-4 mt-10 rounded-full" width={200} height={200} 
            alt="profile"></Image>
      </div>
     </main>
  )
}
