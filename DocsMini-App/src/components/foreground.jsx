import React, { useRef , useState , useLayoutEffect} from 'react'
import Card from './Card';
import {motion} from "framer-motion";
 
function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize : "1.5mb",
            close : true,
            tag : {isOpen : true , tagTitle : "upload" , tagColour : "blue"},
        },
        
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize : ".9mb",
            close : false,
            tag : {isOpen : true , tagTitle : "Download Now" , tagColour : "green"},
        },
        
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize : ".9mb",
            close : true,
            tag : {isOpen : false , tagTitle : "upload" , tagColour : "blue"},
        },
        
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize : ".9mb",
            close : false,
            tag : {isOpen : true , tagTitle : "Download Now" , tagColour : "green"},
        }
    ];
    
    return (
    <div ref = {ref} className='fixed top-0 left-0 z-[3] h-full  w-full flex gap-10 flex-wrap p-5'>
        {data.map((item) =>(
            <Card data = {item} reference={ref}/>
        ) )}
    </div>
  )
}

export default Foreground;