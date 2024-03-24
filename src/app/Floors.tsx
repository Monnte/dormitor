'use client';

import { PlanSpecification } from "./Plan";
import { data } from "./data/data";
import Divider from "./Divider";
import { useContext } from "react";
import { UIContext } from "./providers";
import { Floor } from "./Floor";

export function Floors({plan}) {
    const { currentBlock } = useContext(UIContext);
    let floors = [];
    for (let i = 0; i < plan.count; i++) {
        // let index = indexes[i] - 1;
        // let item = data[currentBlock].plan.details[currentFloor][index];
        const floorRoomDetails = data[currentBlock].details[i].filter((data) => data.type === 'r')
        floors.push(
            <>
                <div className={`w-40 h-20 cursor-pointer`}>
                    <Floor 
                        index={i}
                        number={i+1}
                        // occupied={floorRoomDetails.filter((data) => data.occupied).length}
                        // reduce occupied
                        occupied={floorRoomDetails.reduce((acc, data) => acc + (Number(data.occupied) || 0), 0)}
                        capacity={floorRoomDetails.length * 2}
                    />
                </div>
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
