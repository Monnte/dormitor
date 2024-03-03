import { PlanSpecification } from "./Plan";
import { Room } from "./Room";

export function Rooms(plan: PlanSpecification) {
    let rooms = [];
    for (let i=0; i<plan.count; i++) {
        rooms.push(<Room id="13" width={plan.width} height={plan.height}></Room>)
    }
    const divide = plan.axis==='x' ? 'divide-x' : 'divide-y'
    return (
        <div className={`border ${divide} ${plan.axis==='x' ? 'flex' : ''} divide-gray-700 border-gray-700`}>
            {rooms}
        </div>
    )
}