'use client';

import { PlanSpecification } from "./Plan";
import { data } from "./data/data";
import Divider from "./Divider";
import { useContext } from "react";
import { UIContext } from "./providers";

export function Floors({plan}) { // , indexes, currentBlock, currentFloor
    const { currentFloor, currentBlock, setCurrentFloor, setCurrentBlock } = useContext(UIContext);
    let floors = [];
    for (let i = 0; i < plan.count; i++) {
        // let index = indexes[i] - 1;
        // let item = data[currentBlock].plan.details[currentFloor][index];
        floors.push(
            <>
                <div className={`w-40 h-20 cursor-pointer ${i === currentFloor ? 'border-4 border-gray-400' : '' }`} onClick={() => setCurrentFloor(i)}></div>
                <Divider position={i} length={plan.count} />
            </>
        )
    }
    return (
        <div className={`border-4 border-gray-700 m-8`}>
            {floors}
        </div>
    )
}
