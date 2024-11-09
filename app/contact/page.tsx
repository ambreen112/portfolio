import Navbar from "../components/Navbar";
import React from "react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section id="contact" className="h-screen bg-cover bg-center relative">
        
        <div className="absolute inset-0 bg-[url('/pic4.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        </div>

        
        <div className="relative z-10 flex items-center justify-center h-full px-4 py-8 text-center">
          
          <form
            action="#"
            method="POST"
            className="max-w-lg w-full bg-lime-100 bg-opacity-90 p-8 rounded-lg shadow-lg"
          >
            <h1 className="text-4xl font-serif font-extrabold text-gray-700 mb-8">
              Contact Us
            </h1>

            <div className="space-y-6">
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl text-gray-800"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              
              <div>
                <label
                  htmlFor="email"
                  className="block text-xl text-gray-800"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

            
              <div>
                <label
                  htmlFor="message"
                  className="block text-xl text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
