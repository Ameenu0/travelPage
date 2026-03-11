import React from "react";

export default function Cards(){
    return(
        <section className="relative pt-5 pb-16 overflow-hidden bg-white">
            <h1 className="text-6xl font-black text-gray-900 text-center mb-8">Discover The World From Above</h1>
            <p className="text-center px-10">Traveling is a wonderful way to explore new places. Learn about different cultures and gain</p>

            <div className="flex items-center gap-8 px-20 mt-6 flex-col lg:flex-row">

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                        <img src="https://i.pinimg.com/736x/70/fd/0c/70fd0c0d79ef6051192fb3c9d197ef67.jpg" alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>

                    <div className="flex flex-col gap-4 p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M 5.75 3 A 1.0001 1.0001 0 0 0 4.8867188 3.4960938 L 3.1367188 6.4960938 A 1.0001 1.0001 0 0 0 3 7 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 7 A 1.0001 1.0001 0 0 0 20.863281 6.4960938 L 19.113281 3.4960938 A 1.0001 1.0001 0 0 0 18.25 3 L 5.75 3 z M 6.3242188 5 L 17.675781 5 L 18.841797 7 L 5.1582031 7 L 6.3242188 5 z M 10 9 L 14 9 C 14.552 9 15 9.448 15 10 C 15 10.552 14.552 11 14 11 L 10 11 C 9.448 11 9 10.552 9 10 C 9 9.448 9.448 9 10 9 z"></path>
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-900">Various Destination</h3>
                        <p>Traveling is a wonderful way to explore new places.Learn about different cultures</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                        <img src="https://i.pinimg.com/736x/fd/7b/ec/fd7becf818dc6a4be682b5dc77a5b1e3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>

                    <div className="flex flex-col gap-4 p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M 5.75 3 A 1.0001 1.0001 0 0 0 4.8867188 3.4960938 L 3.1367188 6.4960938 A 1.0001 1.0001 0 0 0 3 7 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 7 A 1.0001 1.0001 0 0 0 20.863281 6.4960938 L 19.113281 3.4960938 A 1.0001 1.0001 0 0 0 18.25 3 L 5.75 3 z M 6.3242188 5 L 17.675781 5 L 18.841797 7 L 5.1582031 7 L 6.3242188 5 z M 10 9 L 14 9 C 14.552 9 15 9.448 15 10 C 15 10.552 14.552 11 14 11 L 10 11 C 9.448 11 9 10.552 9 10 C 9 9.448 9.448 9 10 9 z"></path>
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-900">Various Destination</h3>
                        <p>Traveling is a wonderful way to explore new places.Learn about different cultures</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                        <img src="https://i.pinimg.com/736x/34/a8/b9/34a8b96ee490128a9e249bf70ca17227.jpg" alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>

                    <div className="flex flex-col gap-4 p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M 5.75 3 A 1.0001 1.0001 0 0 0 4.8867188 3.4960938 L 3.1367188 6.4960938 A 1.0001 1.0001 0 0 0 3 7 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 7 A 1.0001 1.0001 0 0 0 20.863281 6.4960938 L 19.113281 3.4960938 A 1.0001 1.0001 0 0 0 18.25 3 L 5.75 3 z M 6.3242188 5 L 17.675781 5 L 18.841797 7 L 5.1582031 7 L 6.3242188 5 z M 10 9 L 14 9 C 14.552 9 15 9.448 15 10 C 15 10.552 14.552 11 14 11 L 10 11 C 9.448 11 9 10.552 9 10 C 9 9.448 9.448 9 10 9 z"></path>
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-900">Various Destination</h3>
                        <p>Traveling is a wonderful way to explore new places.Learn about different cultures</p>
                    </div>
                </div>
            </div>
        </section>
    )
}