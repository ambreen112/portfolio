import Navbar from "../components/Navbar";
import React from "react";

export default function Skills() {
    return (
      <>
        <Navbar />
        
        <h1 className="text-4xl font-extrabold text-center mt-20">My Skills</h1>
  
        <div className="mt-8 px-6">
          {/* Skill Item: HTML */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">HTML</span>
              <span className="text-lg font-medium">80%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full w-[80%]"></div>
            </div>
          </div>
  
          {/* Skill Item: CSS */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">CSS</span>
              <span className="text-lg font-medium">60%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
            </div>
          </div>
  
          {/* Skill Item: JavaScript */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">JavaScript</span>
              <span className="text-lg font-medium">40%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-yellow-500 h-2 rounded-full w-[40%]"></div>
            </div>
            <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold mt-3">Tailwind css </span>
              <span className="text-lg font-medium">70%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-red-500 h-2 rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>
      </div>
     
      </>
    );
  }
  