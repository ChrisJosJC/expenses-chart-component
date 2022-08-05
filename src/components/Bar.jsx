import React from 'react'
import { useState } from "react";
import data from "../data.json";

export function Bar() {
    const [spending, setSpending] = useState(data);
    const [display, setDisplay] = useState("before:hidden");
    let highest = [...data].sort((a, b) => b.amount - a.amount)[0];
    return (
        spending.map((item, key) => {
            if (highest.day == item.day) {
                return (
                    <li before={`$${item.amount}`} onMouseOver={() => setDisplay("before:block")} onMouseLeave={() => setDisplay("before:hidden")} key={key} className={`w-full h-full items-center flex flex-col justify-end before:content-[attr(before)] before:font-bold before:bg-primary before:text-white before:rounded before:mb-2 before:p-1 before:text-xs ${display}`}>
                        <i style={{ height: `${Math.floor(item.amount)}%` }} className=" bg-cyan rounded transition-all w-full block"></i>
                        <p className="text-xs text-secundary py-2">{item.day}</p>
                    </li>
                )
            }
            return (
                <li onMouseOver={() => setDisplay("before:block")} onMouseLeave={() => setDisplay("before:hidden")} before={`$${item.amount}`} key={key} className={`w-full h-full items-center flex flex-col justify-end before:content-[attr(before)] before:font-bold before:bg-primary before:text-white before:rounded before:mb-2 before:p-1 before:text-xs ${display}`}>
                    <i style={{ height: `${Math.floor(item.amount)}%` }} className=" bg-soft-red rounded transition-all w-full block"></i>
                    <p className="text-xs text-secundary py-2">{item.day}</p>
                </li>
            )
        }
        )
    )
}
