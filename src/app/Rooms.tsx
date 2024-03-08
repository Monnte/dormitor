'use client';

import Divider from "./Divider";
import { PlanSpecification } from "./Plan";
import { Room } from "./Room";
import { data } from "./data/data";

export function Rooms({ setSelected, plan, openModal, indexes, currentBlock, currentFloor}: PlanSpecification) {
    let rooms = [];
    for (let i = 0; i < plan.count; i++) {
        let index = indexes[i] - 1;
        let item = data[currentBlock].details[currentFloor][index];
        rooms.push(
            <div className={`${plan.axis === 'x' ? 'flex' : ''}`}>
                <Room
                    id={i + "key"}
                    key={i}
                    width={plan.width}
                    height={plan.height}
                    onClick={() => {
                        setSelected(item);
                        openModal.current()}
                    }
                    name={`${item?.number}`}
                    occupied={item?.occupied}
                />
                <Divider position={i} length={plan.count} />
            </div>
        )
    }
    return (
        <div className={`border ${plan.axis === 'x' ? 'flex' : ''} border-gray-700`}>
            {rooms}
        </div>
    )
}
