import React from "react";

export default function Cards(){
    return(
        <section className="relative pt-5 pb-16 overflow-hidden bg-white">
            <h1 className="text-6xl font-black text-gray-900 text-center mb-8">Journey To The Skies Made Simple!</h1>
            <p className="text-center">Traveling is a wonderful way to explore new places. Learn about different cultures and gain <br />unique experiences</p>
            <div className="flex items-center gap-8 px-20 mt-6 flex-col lg:flex-row">
                <div className="relative w-100 h-100 rounded-2xl overflow-hidden group">
                    <img src="https://i.pinimg.com/736x/7d/83/c5/7d83c5b60ee45f5949183aa587b665c4.jpg" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-120" />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h1 className="text-2xl font-bold">Find Your Destination</h1>
                    </div>
                </div>

                <div className="relative w-100 h-100 rounded-2xl overflow-hidden group">
                    <img src="https://i.pinimg.com/736x/7d/83/c5/7d83c5b60ee45f5949183aa587b665c4.jpg" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-120" />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h1 className="text-2xl font-bold">Book A Ticket</h1>
                    </div>
                </div>

                <div className="relative w-100 h-100 rounded-2xl overflow-hidden group">
                    <img src="https://i.pinimg.com/736x/7d/83/c5/7d83c5b60ee45f5949183aa587b665c4.jpg" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-120" />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h1 className="text-2xl font-bold">Play & Journey</h1>
                    </div>
                </div>
            </div>

        </section>
    )
}