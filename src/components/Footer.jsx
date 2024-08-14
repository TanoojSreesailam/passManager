/* eslint-disable no-unused-vars */
import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full fixed bottom-0">

            <div className='flex justify-center items-center py-4 bg-blue-950 text-white'>

            
            <span className="flex gap-2">
            <p className='font-bold'>Created with </p>
                <RiReactjsLine className='text-blue-500 text-center pl-1' size={30}/>
                <p className='font-bold px-1'> React</p>
            </span>
            </div>
        </div>
    )
}

export default Footer
