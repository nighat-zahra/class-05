import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <div>
       <div className='flex w-full h-[70px] bg-black  pt-5'>
        <div>
        <h1 className='text-white ml-10 font-bold cursor-pointer hover:text-green-500'>PORTFOLIO</h1>
        </div>
        <div className='flex justify-end ml-96'>
        <h1 className='  text-white ml-10 font-bold pl-96 cursor-pointer hover:text-green-500'>Home</h1>
        <h1 className='text-white ml-10  font-bold cursor-pointer hover:text-green-500'>About</h1>
        <h1 className=' text-white ml-10 font-bold  cursor-pointer hover:text-green-500'>Message</h1>
        </div>
        </div>  
        
          </div>
        
    
  )
}
