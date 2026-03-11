import React from "react";

export default function Cards(){
    return(
        <section className="relative pt-10 pb-16 overflow-hidden bg-white">

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 text-center mb-6 px-4">
                Discover The World From Above
            </h1>

            <p className="text-center px-6 md:px-20 text-gray-600">
                Traveling is a wonderful way to explore new places. Learn about different cultures and gain new experiences.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-8 px-6 md:px-12 lg:px-20 mt-10">

    
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-[80%] lg:w-1/3">
                    <div className="h-48 overflow-hidden">
                        <img
                        src="https://i.pinimg.com/736x/70/fd/0c/70fd0c0d79ef6051192fb3c9d197ef67.jpg"
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    <div className="flex flex-col gap-4 p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M5.75 3A1.0001 1.0001 0 004.8867 3.496L3.1367 6.496A1.0001 1.0001 0 003 7v12c0 1.0931.9069 2 2 2h14c1.0931 0 2-.9069 2-2V7a1.0001 1.0001 0 00-.1367-.504L19.1133 3.496A1.0001 1.0001 0 0018.25 3H5.75z"/>
                        </svg>

                        <h3 className="text-lg font-semibold text-gray-900">Various Destination</h3>
                        <p className="text-gray-600">
                        Traveling is a wonderful way to explore new places. Learn about different cultures.
                        </p>
                    </div>
                </div>

    
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-[80%] lg:w-1/3">
                    <div className="h-48 overflow-hidden">
                        <img
                        src="https://i.pinimg.com/736x/fd/7b/ec/fd7becf818dc6a4be682b5dc77a5b1e3.jpg"
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    <div className="flex flex-col gap-4 p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M5.75 3A1.0001 1.0001 0 004.8867 3.496L3.1367 6.496A1.0001 1.0001 0 003 7v12c0 1.0931.9069 2 2 2h14c1.0931 0 2-.9069 2-2V7a1.0001 1.0001 0 00-.1367-.504L19.1133 3.496A1.0001 1.0001 0 0018.25 3H5.75z"/>
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-900">Best Travel Guide</h3>
                        <p className="text-gray-600">
                        Traveling is a wonderful way to explore new places. Learn about different cultures.
                        </p>
                    </div>
                </div>

    
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-[80%] lg:w-1/3">
                    <div className="h-48 overflow-hidden">
                        <img
                        src="https://i.pinimg.com/736x/34/a8/b9/34a8b96ee490128a9e249bf70ca17227.jpg"
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    <div className="flex flex-col gap-4 p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M5.75 3A1.0001 1.0001 0 004.8867 3.496L3.1367 6.496A1.0001 1.0001 0 003 7v12c0 1.0931.9069 2 2 2h14c1.0931 0 2-.9069 2-2V7a1.0001 1.0001 0 00-.1367-.504L19.1133 3.496A1.0001 1.0001 0 0018.25 3H5.75z"/>
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-900">Amazing Experience</h3>
                        <p className="text-gray-600">
                        Traveling is a wonderful way to explore new places. Learn about different cultures.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}