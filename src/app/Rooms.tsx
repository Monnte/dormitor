'use client';

import { PlanSpecification } from "./Plan";
import { Room } from "./Room";
import { data } from "./data/data";

export function Rooms({ setSelected, plan,openModal,indexes, currentBlock, currentFloor}: PlanSpecification) {
    let rooms = [];
    for (let i = 0; i < plan.count; i++) {
        let index = indexes[i] - 1;
        let item = data[currentBlock].plan.details[currentFloor][index];
        rooms.push(
            <Room
                id={i + "key"}
                key={i}
                width={plan.width}
                height={plan.height}
                onClick={() => {
                    setSelected(item);
                    openModal.current()}
                }
                name={item?.number}
                occupied={item?.occupied}
            />
        )
    }
    const divide = plan.axis === 'x' ? 'divide-x' : 'divide-y'
    return (
        <div className={`border ${divide} ${plan.axis === 'x' ? 'flex' : ''} divide-gray-700 border-gray-700`}>
            {rooms}
        </div>
    )
}
