'use client';

import { PlanSpecification } from "./Plan";
import { Room } from "./Room";

export function Rooms({ setSelected, plan,openModal }) {
    let rooms = [];
    for (let i = 0; i < plan.count; i++) {
        rooms.push(
            <Room
                id={i + "key"}
                key={i}
                width={plan.width}
                height={plan.height}
                onClick={() => {setSelected(i + "key");openModal.current()}}
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