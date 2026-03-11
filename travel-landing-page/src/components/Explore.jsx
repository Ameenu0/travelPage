import React from "react";

export default function Explore(){
    return(
        <section className="relative pt-20 pb-20 overflow-hidden bg-white">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 px-6 lg:px-20 mt-12">

                <div className="p-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-lg"> 
                    <img src="https://i.pinimg.com/736x/62/c4/e4/62c4e404f69cacccd77155552ee5ed80.jpg" alt="" className="w-40 h-40 rounded-full object-cover"/>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">EXPLORE THE SKIES WITH CONFIDENCE!</h2>
                </div>

                <div className="p-10 flex flex-col items-center lg:items-end text-center lg:text-right gap-6 max-w-lg">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">DISCOVER THE WORLD ONE STEP AT A TIME</h2>
                    <img src="https://i.pinimg.com/736x/80/95/b3/8095b3156e30e23f144be14dc2a5f522.jpg" alt="" className="w-40 h-40 rounded-full object-cover"/>

                </div>

            </div>
        </section>
    )
}