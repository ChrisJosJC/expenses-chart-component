import { useEffect, useState } from "react";
import data from "../services/spending";

export function Bar() {
    const [spending, setSpending] = useState([]);
    let highest = {day: "wed", amount: 0};
    useEffect(()=>{
        data.then(data => {
            setSpending(data);
            highest = [...data].sort((a, b) => b.amount - a.amount)[0];
            // Cambiarle el color al máximo
            // console.log(highest);
        })
    }, []);

    return (
        <ul className="flex justify-between w-full gap-4 h-5/6">
            {
                spending.map((item,key) => {
                    if(highest.day == item.day){
                        return (
                            <li key={key} className="w-full h-full items-center flex flex-col justify-end">
                            <i style={{height:`${Math.floor(item.amount)}%`}} className=" bg-cyan rounded transition-all w-full block"></i>
                            <p className="text-xs text-secundary py-2">{item.day}</p>
                        </li>
                        )
                    }
                    return (
                        <li key={key} className="w-full h-full items-center flex flex-col justify-end">
                            <i style={{height:`${Math.floor(item.amount)}%`}} className=" bg-soft-red rounded transition-all w-full block"></i>
                            <p className="text-xs text-secundary py-2">{item.day}</p>
                        </li>
                    )
                }
                )
            }
        </ul>
    );
}