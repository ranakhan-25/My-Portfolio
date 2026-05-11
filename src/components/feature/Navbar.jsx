"use client"

import Link from "next/link"
import { Spin as Hamburger } from 'hamburger-react'
import { SiTransportforlondon } from "react-icons/si";
import { ActiveLink } from "../shared/ActiveLink";
import ThemeToggle from "../shared/ThemeToggle";
import { useState } from "react";
import { FaHome,FaServicestack } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { IoIosContract } from "react-icons/io";

const Navbar = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(true)
  

  return (
    <div className="shadow-2xl sticky top-0 z-50 w-full bg-white/70 dark:bg-black/40 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto relative flex justify-between items-center px-3 sm:px-4 sm:pl-8 md:pl-12 md:px-6 py-4">
        <div className="flex items-center gap-2">
          <div className=" cursor-pointer flex items-center gap-2 text-3xl"><SiTransportforlondon/><span className="font-medium">Portfolio</span></div>
        </div>
        <div>
          <ul className=" hidden lg:flex lg:gap-3  bg-linear-to-r from-violet-100 via-fuchsia-100 to-pink-100 py-1 px-1  rounded-4xl">
            <li><ActiveLink  href="#home"><FaHome className="text-sm p-0"/><span>Home</span></ActiveLink></li>
            <li><ActiveLink href="#about"><MdOutlineRoundaboutRight className="text-sm p-0"/><span>About</span></ActiveLink></li>
            <li><ActiveLink href="#service"><FaServicestack className="text-sm p-0"/>Service</ActiveLink></li>
            <li><ActiveLink href="#skills"><GiSkills className="text-sm p-0"/>Skills</ActiveLink></li>
            <li><ActiveLink href="#projects"><AiOutlineProject className="text-sm p-0"/>Projects</ActiveLink></li>
            <li><ActiveLink href="#contract"><IoIosContract className="text-sm p-0"/>Contract</ActiveLink></li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="lg:hidden" onClick={()=>setIsOpenMenu(!isOpenMenu)}>
            <Hamburger />
          </div>
          <ThemeToggle/>
        </div>

        <ul className={`${!isOpenMenu && "left-0 opacity-100" } h-[100vh] opacity-0 duration-500 delay-150 ease-in-out absolute top-full -left-full w-full sm:w-100 bg-white dark:bg-black p-5 flex flex-col gap-2 text-xl font-medium shadow`}>
          <li className="hover:bg-blue-100 hover:text-purple-600 p-2"><Link  href="#"  className="flex items-center gap-2"><FaHome/>Home</Link></li>
          <li className="hover:bg-blue-100 hover:text-purple-600 p-2"><Link href="#about" className="flex items-center gap-2"><MdOutlineRoundaboutRight/>About</Link></li>
          <li className="hover:bg-blue-100 hover:text-purple-600 p-2"><Link href="#service"  className="flex items-center gap-2"><FaServicestack />Service</Link></li>
          <li className="hover:bg-blue-100 hover:text-purple-600 p-2"><Link href="#skills"  className="flex items-center gap-2"><GiSkills/>Skills</Link></li>
          <li className="hover:bg-blue-100 hover:text-purple-600 p-2"><Link href="#projects"  className="flex items-center gap-2"><AiOutlineProject/>Projects</Link></li>
          <li className="hover:bg-blue-100 hover:text-purple-600 p-2"><Link href="#contract"  className="flex items-center gap-2"><IoIosContract/>Contract</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar