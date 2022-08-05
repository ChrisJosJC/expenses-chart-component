import React from 'react'
import { Bars } from "./Bars.jsx";

export function Graph() {
    return (
        <div className="flex flex-col mt-1 h-2/4 bg-white md:w-2/4 lg:w-2/6 pt-10 p-10 w-full rounded-2xl">
            <h2 className="text-primary font-bold md:text-2xl sm:text-5xl">
                Spending - Last 7 days
            </h2>
            <Bars />
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
