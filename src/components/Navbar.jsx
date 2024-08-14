/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav)
    }
    return (
        <div className=" w-full bg-slate-100 py-4">
            <div className="flex gap-10 justify-between items-center md:px-6 px-2 relative">
                <h1 className="logo font-extrabold text-black md:text-2xl text-lg">
                    <span className="text-green-400">&lt;</span>
                PassManager<span className="text-green-400">/&gt;</span>
                </h1>

                <div className=" md:flex gap-10 font-normal text-lg font-mono hidden text-black items-center justify-evenly">
                    <a className="hover:underline cursor-pointer">Home</a>
                    <a className="hover:underline cursor-pointer">About</a>
                    <a className="hover:underline cursor-pointer">Saved</a>
                        <button className="bg-green-700 px-2 py-2 w-32 flex items-center justify-evenly rounded-3xl hover:bg-green-800">
                            <FaGithub size={20} className="text-white"/>   <span className="">GitHub</span>
                        </button>
                </div>
                
                
                <div onClick={handleNav} className="flex items-center absolute top-2 right-2 cursor-pointer
                ">
                {!nav? <GiHamburgerMenu size={20} className="md:hidden absolute right-2 z-[2] text-black"/> : <IoClose size={30} className="md:hidden fixed right-2 z-[2]"/>}
                </div>

                <div className={!nav?`fixed top-0 left-0 w-full z-[1] hidden `: `fixed top-0 left-0 w-full z-[1] visible`}>

                    <div  className="w-full min-h-screen bg-[#bdf0c6] flex flex-col py-20 gap-10 text-md px-5 uppercase">
                    
                        <a className="border-b border-black">Home</a>
                        <a className="border-b border-black">About</a>
                        <a className="border-b border-black">Saved</a>
                        <a className="border-b border-black">Connect</a>
                        <div className="">
                        <button className="bg-green-700 px-2 py-2 w-32 flex items-center justify-evenly rounded-3xl hover:bg-green-800">
                            <FaGithub size={20} className="text-white"/>   <span className="text-white">GitHub</span>
                        </button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
