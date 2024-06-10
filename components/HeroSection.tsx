import React from "react";

export default function HeroSection() {
    return (
        <div className="flex h-[750px] items-center">
            <div className="max-w-[500px] flex flex-col gap-y-6">
                <h1 className="text-5xl font-medium">Boost Your Minecraft Server Revenue</h1>
                <p className="text-lg">Unlock the potential of your server with our free, open-source donation store. Start monetizing effortlessly today!</p>
                <div className="flex gap-3">
                    <button className="bg-black text-white px-4 py-3 rounded-md">Get Started</button>
                    <button className="bg-gray-300 text-black px-4 py-3 rounded-md">Demo Store</button>
                </div>
                <div className="my-12">
                <img src="./stripe.png" alt="" className="h-16" />
                </div>
            </div>
        </div>
    )
};