import React from "react";

export default function Navbar(){
    return(
        <nav className="fixed top-0 left-0 z-50 w-full bg-white-90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <div>For Logo</div>
                    <span className="font-bold text-lg text-blue-500 tracking-wider">Travel-Beta</span>
                </div>

                <div className="flex items-center gap-10">
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Home</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">About Us</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Package</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Tour</a>
                    <a href="" className="text-sm font-semibold text-gray-500 hover:text-gray-900">Contact Us</a>
                </div>

                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-sm font-bold hover:shadow-md hover:scale-105 transition-all duration-300">Book Trip</button>
            </div>
        </nav>
    )
}