'use client';

import { PlanSpecification } from "./Plan";
import { data } from "./data/data";

export function Floors({plan}: PlanSpecification) { // , indexes, currentBlock, currentFloor
    let floors = [];
    for (let i = 0; i < plan.count; i++) {
        // let index = indexes[i] - 1;
        // let item = data[currentBlock].plan.details[currentFloor][index];
        floors.push(
            <div className="w-40 h-20"></div>
        )
    }
    const divide = plan.axis === 'x' ? 'divide-x' : 'divide-y'
    return (
        <div className={`border ${divide} ${plan.axis === 'x' ? 'flex' : ''} divide-gray-700 border-gray-700 max-w-min`}>
            {floors}
        </div>
    )
}
