import Navbar from "../components/Navbar";
import React from "react";

export default function About() {
    return (
      <>
        <Navbar />
        <section id="about" className="h-screen bg-cover bg-center">
        
          <div className="relative bg-[url('/port2.png')] h-full bg-cover bg-center">
    
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black">
            <div className="flex flex-col justify-center items-start h-full px-10">
              <h2 className="text-6xl font-sans font-extrabold  text-center  mt-0 text-white relative z-10">
                About me
              </h2>
              
                <p className="text-lg text-left text-white max-w-lg mt-6"> Over the past two years, I have been learning HTML and CSS on my own. 
                    I am currently learning TypeScript and Next.J.S. </p>

              
            </div>
          </div>
          </div>
        </section>
      </>
    );
  }
  
  