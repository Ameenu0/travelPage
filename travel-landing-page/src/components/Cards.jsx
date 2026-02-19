import React from "react";

export default function Cards(){
    return(
        <section className="relative pt-5 pb-16 overflow-hidden bg-white">
                <h1 className="text-7xl font-black text-gray-900 text-center mb-8">Loved By Thousand Travelers</h1>
                <p className="text-center">Experience real stories from satisfied travelers who discovered their perfect journeys with us</p>
                <div className="flex items-center gap-8 px-20 mt-6 flex-col lg:flex-row">
                    <div className="rounded-3xl p-8 shadow-2xl">
                        <div className="flex flex-col gap-5">
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur soluta magnam modi facilis alias? Recusandae excepturi quibusdam molestias voluptas sapiente! Eveniet, hic, adipisci impedit laboriosam expedita modi officia unde magni </p>
                            <hr />
                        </div>
                        <div className="flex items-center mt-5">
                        <img src="https://i.pinimg.com/1200x/24/8f/4a/248f4affc21def2e1e7b06d65864423f.jpg" alt="" className="w-15 h-15 mr-5 rounded-4xl"/>
                            <div>
                                <h2 className="font-semibold">Billie Eilish</h2>
                                <p>Singer</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bg-blue-500 rounded-3xl p-8 shadow-2xl">
                        <div className="flex flex-col gap-5">
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur soluta magnam modi facilis alias? Recusandae excepturi quibusdam molestias voluptas sapiente! Eveniet, hic, adipisci impedit laboriosam expedita modi officia unde magni </p>
                            <hr />
                        </div>
                        <div className="flex items-center mt-5">
                            <img src="https://i.pinimg.com/736x/fa/c7/b2/fac7b284352b42fe41c88346dd50bb56.jpg" alt="" className="w-15 h-15 mr-5 rounded-4xl"/>
                            <div>
                                <h2 className="font-semibold">Albert Einstein</h2>
                                <p>Theoretical Physicist</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="rounded-3xl p-8 shadow-2xl">
                        <div className="flex flex-col gap-5">
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur soluta magnam modi facilis alias? Recusandae excepturi quibusdam molestias voluptas sapiente! Eveniet, hic, adipisci impedit laboriosam expedita modi officia unde magni </p>
                            <hr />
                        </div>
                        <div className="flex items-center mt-5">
                            <img src="https://i.pinimg.com/1200x/db/63/46/db6346a3f6f40ea88428797599a2c70e.jpg" alt="" className="w-15 h-15 mr-5 rounded-4xl"/>
                            <div>
                                <h2 className="font-semibold">Elon Musk</h2>
                                <p>CEO</p>
                            </div>
                            
                        </div>
                    </div>
                </div>    
        </section>
    )
}