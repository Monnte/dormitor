import { Card } from "@nextui-org/card";
import { Rooms } from "./Rooms";
import { Hallway } from "./Hallway";

export interface PlanSpecification {
    width: number, 
    height: number, 
    count: number, 
    axis: 'x' | 'y',
}

export function Plan() {

    let plan: PlanSpecification = {width: 10, height: 14, count: 10, axis: "y"}
    return (
        <Card className="h-full flex justify-items-center items-center p-3">
            <div className={`border-4 border-gray-700 w-min ${plan.axis === 'y' ? 'flex' : ''}`}>
                <Rooms {...plan}></Rooms>
                <Hallway width={10} height={10}></Hallway>
                <Rooms {...plan}></Rooms>
            </div>
        </Card>
    )
}