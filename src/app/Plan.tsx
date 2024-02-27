import { Card } from "@nextui-org/card";
import { Rooms } from "./Rooms";
import { Hallway } from "./Hallway";
import { Staircase } from "./Staircase";

export interface PlanSpecification {
    width: number, 
    height: number, 
    count: number, 
    axis: 'x' | 'y',
}

export function Plan() {

    let plan: PlanSpecification = {width: 20, height: 10, count: 5, axis: "y"}
    let plan2: PlanSpecification = {width: 20, height: 10, count: 11, axis: "y"}

    return (
        <Card className="h-full flex justify-items-center items-center p-3">
            <div className={`border-4 border-gray-700 w-min ${plan.axis === 'y' ? 'flex' : ''}`}>
                <div className={`${plan.axis === 'x' ? 'flex' : ''}`}>
                    <Rooms {...plan}></Rooms>
                    <Staircase width={10} height={10}></Staircase>    
                    <Rooms {...plan}></Rooms>
                </div>
                <Hallway width={10} height={10}></Hallway>
                <Rooms {...plan2}></Rooms>
            </div>
        </Card>
    )
}