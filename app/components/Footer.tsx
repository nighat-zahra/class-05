import Image from 'next/image';
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    
    <div  className='bg-gray-700 w-full h-[200px]  mt-30'>
        <div className="container mt-10  ">
        <div className='grid md:grid-cols-3  gap-16'>
            <div className='flex space-y-4 justify-center items-center '>
                <h2 className='flex text-3xl cursor-pointer font-bold  bg-gray-300 w-[400px] h-[70px] justify-center items-center ml-5 hover:text-pink-400'>Thanks For Watching</h2>
            </div>
        
            <div className='flex space-y-4 justify-center items-center '>
                <h2 className='flex text-3xl cursor-pointer font-bold bg-gray-300 w-[250px] h-[70px] justify-center items-center hover:text-pink-400'>Contact Us</h2>
            </div>
            <div>
                <div className="flex gap-8 text-orange-500 text-4xl pt-16 pl-[50px]">
                <FaGithub />
                <FaXTwitter/>
                <FaLinkedin/>
                </div>
                </div>
            </div>
        </div>
        </div>
        
  )
}

export default Footer;