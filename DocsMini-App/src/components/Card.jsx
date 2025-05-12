import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useRef } from 'react';

function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints = {reference} whileDrag = {{scale : 1.2}} dragElastic = {0.1} dragTransition = {{bounceStiffness : 300 , bounceDamping : 10 }}

     className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden flex-shrink-0'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between px-8 py-3 mb-2'>
                <h5>{data.filesize}</h5>

                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseOutline /> : <LuDownload size = ".8em" color='#fff'/> }
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColour === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3></div>) 
            }
        </div>
    </motion.div>
  )
}

export default Card