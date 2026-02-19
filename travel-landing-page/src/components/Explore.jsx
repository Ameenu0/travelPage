import React from "react";

export default function Explore(){
    return(
        <section className="relative pt-20 pb-20 overflow-hidden bg-white">
            <div className="flex justify-between gap-8 px-20 mt-6 flex-col lg:flex-row">
                <div className="p-10 flex flex-col gap-10">
                    <img src="https://i.pinimg.com/736x/7d/83/c5/7d83c5b60ee45f5949183aa587b665c4.jpg" alt="" className="w-50 h-50 rounded-full"/>
                    <h2 className="text-5xl font-semibold">EXPLORE THE SKIES <br /> WITH CONFIDENCE!</h2>
                </div>

                <div className="p-10 flex flex-col gap-10">
                    <h2 className="text-5xl font-semibold">DISCOVER THE WORLD<br /> ONE STEP AT A TIME</h2>
                    <img src="https://i.pinimg.com/736x/7d/83/c5/7d83c5b60ee45f5949183aa587b665c4.jpg" alt="" className="w-50 h-50 rounded-full float-right"/>
                </div>

            </div>
        </section>
    )
}