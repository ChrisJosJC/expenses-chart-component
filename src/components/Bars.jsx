import { Bar } from "./Bar.jsx";

export function Bars() {

    return (
        <ul className="flex justify-between w-full gap-2 h-5/6">
            {
                <Bar></Bar>
            }
        </ul>
    );
}