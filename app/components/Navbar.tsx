import Link from "next/link";
import React from 'react'; 

export default function Navbar(){
    return(
        <header className="bg-gradient-to-r from-blue-300 to-purple-600">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-serif text-xl">
            <a href="#" className="font-bold">MyPortfolio</a>
          </div>
          
          
          <ul className="hidden md:flex space-x-8 text-right items-center">
            <li><Link href="/" className="text-white hover:text-gray-900 font-serif">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-gray-900">About</Link></li>
            <li><a href="/skills" className="text-white hover:text-gray-900">Skills</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-900">Contact</a></li>
            <li><a href="/mywork" className="text-white hover:text-gray-900">Mywork</a></li>
          </ul>
          
          </nav>
          </header>
    )}