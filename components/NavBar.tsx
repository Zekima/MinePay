import React from "react";

export function NavBar() {
    return (
        <div className="max-w-[1280px] m-auto p-5 flex justify-between items-center">
            <div className="flex items-center gap-2 ">
                <img src="./logo.svg" alt="MinePay Logo" className="w-14 h-12" />
                <p className="text-2xl font-medium">MinePay</p>
            </div>
            <div>
                <div className="p-3 hover:underline cursor-pointer">
                    <p>Dashboard</p>

                </div>
            </div>

        </div>
    )
}