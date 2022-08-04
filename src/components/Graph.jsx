import React from 'react'
import { Bar } from "./Bar.jsx";

export function Graph() {
    return (
        <div className="flex flex-col mt-1 h-3/4 bg-white pt-6 p-4 md:w-3/6 sm:w-full lg:w-2/6 rounded-lg">
            <h2 className="text-primary font-bold text-2xl">
                Spending - Last 7 days
            </h2>
            <Bar />
            <hr className="opacity-20" />

            <div className="mt-4 flex justify-between">
                <div><span className="text-secundary text-md md:text-sm">Total this month</span>
                    <h2 className="text-primary font-bold text-2xl">$478.33</h2></div>
                {/* Porcentaje */}
                <div className="mt-2">
                    <span className="text-primary block text-right font-bold">+2.4%</span>
                    <span className="text-secundary md:text-sm">from last month</span>
                </div>
            </div>
            <div />
        </div>
    )
}
