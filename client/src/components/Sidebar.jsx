import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import { FaRegCompass, FaFacebookMessenger } from "react-icons/fa";
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import SidebarButton from './SidebarButton';
import Logo from './Logo';
const Sidebar = () => {
  return (
    <div className='fixed bottom-0 left-0 h-11 w-full bg-brandLightBase flex items-center justify-evenly 
    md:h-full md:w-20 md:px-2 md:py-5 md:flex-col md:justify-between md:items-center 
    lg:items-start lg:w-64
    z-50
    '>
      <div className='flex w-full justify-evenly md:flex-col'>

      <Logo className='text-4xl hidden md:block mb-10 p-3'/>
      <SidebarButton name='Home' logo={<AiFillHome className=''/>}/>
      <SidebarButton name='Search' logo={<BsSearch/>} className='hidden md:flex'/>
      <SidebarButton name='Explore' logo={<FaRegCompass/>}/>
      <SidebarButton name='Create Post' logo={<BsPlusSquare/>}/>
      <SidebarButton name='Messages' logo={<FaFacebookMessenger/>}/>
        {/* TODO change this with the actual account dp */}
      <SidebarButton name='Account' logo={<MdOutlineAccountCircle />}/>
      </div>
      <SidebarButton name='Settings' logo={<AiTwotoneSetting />} className='hidden md:flex'/>
    </div>
  )
}

export default Sidebar