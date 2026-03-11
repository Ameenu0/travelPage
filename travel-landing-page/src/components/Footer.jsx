import React from "react";

export default function Footer(){
    return(
        <section className="relative pt-5 overflow-hidden bg-white">
            <div className="w-full bg-gray-100 px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <h3 className="font-semibold ">Need Help?</h3>
                    <p className="text-zinc-500">Chat with Us</p>
                    <p className="text-zinc-500">Contact Us</p>
                    <p className="text-zinc-500">Help Center</p>
                </div>

                <div>
                    <h3 className="font-semibold ">About Travel Beta</h3>
                    <p className="text-zinc-500">About Us</p>
                    <p className="text-zinc-500">Terms and Conditions</p>
                    <p className="text-zinc-500">Cookie Notice</p>
                    <p className="text-zinc-500">Privacy Notice</p>
                    <p className="text-zinc-500">Travel Beta Payment Information Guidelines</p>
                </div>

                <div>
                    <h3 className="font-semibold ">Join Us On</h3>
                    <p className="text-zinc-500">Facebook</p>
                    <p className="text-zinc-500">Instagram</p>
                    <p className="text-zinc-500">Twitter</p>
                    <p className="text-zinc-500">Tiktok</p>
                </div>

                <div>
                    <h3 className="font-semibold ">Booking</h3>
                    <p className="text-zinc-500">Manage</p>
                    <p className="text-zinc-500">Travel Guide</p>
                    <p className="text-zinc-500">Destination</p>
                </div>
            </div>


            

        </section>


    )
}