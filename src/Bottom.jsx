import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


function Bottom() {
  return (
    <div id='bottom' className='w-full flex text-center justify-center bg-green-300 h-[350px]'>
        <div className='mt-[70px] w-full'>
        <h1 className='mb-[50px] font-bold text-4xl'>sunnyside</h1>
        <div className='flex justify-center mr-[30px]'>
            <p className='ml-12'>About</p>
            <p className='ml-12'>Services</p>
            <p className='ml-12'>Projects</p>
        </div>
        <div className='flex justify-center text-2xl mt-[80px]'>
        <FaFacebookSquare className='mr-[22px]'/>
        <FaInstagram className='mr-[22px]'/>
        <FaTwitter className='mr-[22px]'/>
        <FaPinterest className='mr-[22px]'/>
        </div>
        </div>
    </div>
  )
}

export default Bottom