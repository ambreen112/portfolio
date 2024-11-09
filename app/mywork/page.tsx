import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";

export default function Work(){
    return(
        <>
        <Navbar/>
        <div className="flex flex-col justify-around items-center  mt-10">
            <Image 
                src="/resume.png" 
                alt="resume" 
                width={300}  
                height={800} 
                className=" max-w-xs rounded-lg shadow-lg mt-10 "  
            />

<a 
                href="https://resume-nine-red.vercel.app"  
                target="_blank"
                rel="noopener noreferrer"
                className="mt-25 text-blue-500 hover:text-blue-700 text-lg font-semibold"
            >
                View on Vercel
            </a>
            </div>
              
            <div className="flex justify-center mt-16">
            <Image 
                src="/screen1.png" 
                alt="resume" 
                width={300}  
                height={800} 
                className=" max-w-xs rounded-lg shadow-lg "  
            />

</div>


        </>
    )
}