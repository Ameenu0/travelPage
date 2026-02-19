import React from "react";

export default function Wonder(){
    return(
        <section className="relative pt-20 pb-25 overflow-hidden bg-white">
            <div className="px-25 flex">
                <div className="relative w-full">
                    <img src="https://i.pinimg.com/736x/7d/83/c5/7d83c5b60ee45f5949183aa587b665c4.jpg" alt="" className="rounded-2xl shadow-2xl h-125 w-155 object-cover"/>
                    <div className="absolute bg-white top-140 px-10 py-4 rounded-2xl right-2800 shadow-2xl">
                        <h2 className="text-4xl font-semibold text-blue-600">20% OFF</h2>
                        <p>Till 28 September <br />2026.</p>
                    </div>
                </div>

                <div className="space-y-5">
                    <p>TRAVELING IS A WONDERFUL WAY TO EXPLORE NEW PLACES. LEARN ABOUT DIFFERENT CULTURES</p>
                    <h1 className="text-7xl font-black">UNLEASH <br />WANDERLUST <br /> WITH <br />SKEWING'S</h1>
                    <p>Traveling is a wonderful experience</p>
                    <h3 className="p-5 bg-gray-200 rounded-2xl text-center font-semibold">BOOK A FLIGHT NOW</h3>
                </div>
            </div>
        </section>
    )
}