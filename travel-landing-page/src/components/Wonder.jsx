import React from "react";

export default function Wonder(){
    return(
        <section className="relative py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
    
                <div className="relative w-full lg:w-1/2">
                    <img src="https://images.unsplash.com/photo-1546479906-2231699d4430?q=80&w=1142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-xl"/>
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-blue-600">20% OFF</h2>
                        <p className="text-sm text-gray-600">Till 28 September 2026</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                    <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold">Explore The World</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Unleash Wanderlust <br className="hidden lg:block" />With Skewing's</h1>
                    <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">Traveling is a wonderful way to explore new places and learn about different cultures around the world.</p>
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md">Book A Flight Now</button>
                </div>

            </div>
        </section>
    )
}