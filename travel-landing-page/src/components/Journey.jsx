import React from "react";

export default function Cards(){
    return(
        <section className="relative pt-10 pb-16 overflow-hidden bg-white">

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-center px-4">
                Journey To The Skies Made Simple!
            </h1>

            <p className="px-6 md:px-16 text-center text-gray-600 mt-4">
                Traveling is a wonderful way to explore new places. Learn about different cultures and gain
                <br className="hidden md:block" /> unique experiences
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-8 px-6 md:px-12 lg:px-20 mt-10">

                
                <div className="relative w-full md:w-[80%] lg:w-1/3 h-64 md:h-80 rounded-2xl overflow-hidden group">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=1170&auto=format&fit=crop"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black/30">
                        <h1 className="text-xl md:text-2xl font-bold">Find Your Destination</h1>
                    </div>
                </div>

        
                <div className="relative w-full md:w-[80%] lg:w-1/3 h-64 md:h-80 rounded-2xl overflow-hidden group">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1684407617466-f7dd9219c859?q=80&w=1170&auto=format&fit=crop"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black/30">
                        <h1 className="text-xl md:text-2xl font-bold">Book A Ticket</h1>
                    </div>
                </div>

        
                <div className="relative w-full md:w-[80%] lg:w-1/3 h-64 md:h-80 rounded-2xl overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black/30">
                        <h1 className="text-xl md:text-2xl font-bold">Play & Journey</h1>
                    </div>
                </div>

            </div>

        </section>
    )
}