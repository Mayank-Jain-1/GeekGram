import React from 'react'
import { MdHome,MdOutlineAccountCircle } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass, FaFacebookMessenger } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";
import SidebarButton from './SidebarButton';
import Logo from './Logo';
import SearchBar from './SearchBar';
const Sidebar = () => {
  return (
    <div className='fixed bottom-0 left-0 h-11 w-full bg-brandLightBase flex items-center justify-evenly 
    md:h-full md:w-auto md:px-2 md:py-5 md:flex-col md:justify-start md:items-center 
    lg:items-start lg:w-64
    '>
      <Logo className='text-4xl hidden md:block mb-10 p-3'/>
      <SidebarButton name='Home' logo={<AiFillHome className=''/>}/>
      <SidebarButton name='Explore' logo={<FaRegCompass/>}/>
      <SidebarButton name='Create Post' logo={<BsPlusSquare/>}/>
      <SidebarButton name='Messages' logo={<FaFacebookMessenger/>}/>

        {/* TODO change this with the actual account dp */}
      <SidebarButton name='Account' logo={<MdOutlineAccountCircle className=''/>}/>
    </div>
  )
}

export default Sidebar