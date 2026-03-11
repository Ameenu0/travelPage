import React from "react";

export default function Hero(){
    return (
        <section className="relative pt-16 md:pt-24 pb-16 overflow-hidden min-h-[85vh] flex items-center bg-[url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center lg:bg-none lg:bg-white">

            <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-12">

            
                <div className="lg:w-1/2 space-y-6 z-10 text-center lg:text-left">

                    <div className="flex flex-col items-center lg:items-start gap-2">
                        <span className="w-10 h-2 bg-blue-500"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                        Elevate Your Travel Journey
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                        <span className="block">Experience</span>
                        <span className="block">The Magic Of</span>
                        <span className="block">Flight!</span>
                    </h1>

            
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                        <button className="px-8 py-4 bg-blue-500 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all duration-300 text-white">
                        Book A Trip Now
                        </button>

                        <button className="text-2xl">
                        ▶️
                        </button>
                    </div>

                </div>

        
                <div className="hidden lg:block lg:w-1/2">
                    <img
                        src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Flight"
                        className="w-full h-[420px] xl:h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                </div>

            </div>
        </section>
    )
}