import React from "react";

export default function Cards(){
    return(
        <section className="relative pt-10 pb-16 overflow-hidden bg-white">

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 text-center mb-6 px-4">Loved By Thousand Travelers</h1>
            <p className="text-center text-gray-600 px-6 md:px-20">Experience real stories from satisfied travelers who discovered their perfect journeys with us</p>

            <div className="flex flex-col lg:flex-row items-center gap-8 px-6 md:px-12 lg:px-20 mt-10">

                <div className="rounded-3xl p-6 md:p-8 shadow-2xl w-full md:w-[80%] lg:w-1/3 bg-white">
                    <div className="flex flex-col gap-5">
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur soluta magnam modi facilis alias?</p>
                        <hr />
                    </div>

                    <div className="flex items-center mt-5">
                        <img
                            src="https://i.pinimg.com/1200x/24/8f/4a/248f4affc21def2e1e7b06d65864423f.jpg"
                            className="w-12 h-12 md:w-14 md:h-14 mr-4 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-semibold">Billie Eilish</h2>
                            <p className="text-gray-500 text-sm">Singer</p>
                        </div>
                    </div>
                </div>


                <div className="rounded-3xl p-6 md:p-8 shadow-2xl w-full md:w-[80%] lg:w-1/3 bg-blue-500 text-white">
                    <div className="flex flex-col gap-5">
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur
                            soluta magnam modi facilis alias?
                        </p>
                        <hr className="border-white/40" />
                    </div>

                    <div className="flex items-center mt-5">
                        <img
                            src="https://i.pinimg.com/736x/fa/c7/b2/fac7b284352b42fe41c88346dd50bb56.jpg"
                            className="w-12 h-12 md:w-14 md:h-14 mr-4 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-semibold">Albert Einstein</h2>
                            <p className="text-sm opacity-80">Theoretical Physicist</p>
                        </div>
                    </div>
                </div>

        
                <div className="rounded-3xl p-6 md:p-8 shadow-2xl w-full md:w-[80%] lg:w-1/3 bg-white">
                    <div className="flex flex-col gap-5">
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur
                            soluta magnam modi facilis alias?
                        </p>
                        <hr />
                    </div>

                    <div className="flex items-center mt-5">
                        <img
                            src="https://i.pinimg.com/1200x/db/63/46/db6346a3f6f40ea88428797599a2c70e.jpg"
                            className="w-12 h-12 md:w-14 md:h-14 mr-4 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-semibold">Elon Musk</h2>
                            <p className="text-gray-500 text-sm">CEO</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}