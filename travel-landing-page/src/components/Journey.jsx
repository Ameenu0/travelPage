import React from "react";

export default function Cards(){
    return(
        <section className="relative pt-5 pb-16 overflow-hidden bg-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center">Journey To The Skies Made Simple!</h1>
            <p className="px-10 text-center">Traveling is a wonderful way to explore new places. Learn about different cultures and gain <br />unique experiences</p>
            <div className="flex items-center gap-8 px-20 mt-6 flex-col lg:flex-row">
                <div className="relative w-100 h-100 rounded-2xl overflow-hidden group">
                    <img src="https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-120" />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h1 className="text-2xl font-bold">Find Your Destination</h1>
                    </div>
                </div>

                <div className="relative w-100 h-100 rounded-2xl overflow-hidden group">
                    <img src="https://plus.unsplash.com/premium_photo-1684407617466-f7dd9219c859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-120" />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h1 className="text-2xl font-bold">Book A Ticket</h1>
                    </div>
                </div>

                <div className="relative w-100 h-100 rounded-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-120" />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h1 className="text-2xl font-bold">Play & Journey</h1>
                    </div>
                </div>
            </div>

        </section>
    )
}