import React from "react";

export default function Navbar(){
    return(

        <nav className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


                <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-10 h-10 rounded-3xl flex justify-center items-center">
                        <h2 className="font-bold text-white text-lg font-serif">T<sub>B</sub></h2>
                    </div>
                    <span className="font-bold text-lg text-blue-500 tracking-wider">
                    Travel-Beta
                    </span>
                </div>


                <div className="hidden lg:flex items-center gap-10">
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Home</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">About Us</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Package</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Tour</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Contact Us</a>
                </div>


                <div className="flex items-center gap-4">

                    <button className="hidden lg:block px-6 py-3 bg-blue-500 text-white rounded-lg text-sm font-bold hover:shadow-md hover:scale-105 transition-all duration-300">
                    Book Trip
                    </button>

                
                    <button className="lg:hidden text-gray-700">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-7 h-7"
                    >
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                    </button>

                </div>

            </div>
        </nav>
    )
}