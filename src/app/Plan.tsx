'use client';
import { Card } from "@nextui-org/card";
import { Rooms } from "./Rooms";
import { Hallway } from "./Hallway";
import { Staircase } from "./Staircase";
import { Button } from "@nextui-org/react";
import ModalReserve from "./modal";
import react, { useRef, useState } from "react";

export interface PlanSpecification {
    width: number,
    height: number,
    count: number,
    axis: 'x' | 'y',
}

export function Plan() {
    const onOpenRef = useRef(null);
    const maxFloor = 5;
    const [selected, setSelected] = useState("1");
    const [currentFloor, setCurrentFloor] = useState(0);
    const [currentBlock, setCurrentBlock] = useState("B05")


    let plan: PlanSpecification = { width: 20, height: 10, count: 5, axis: "y" }
    let plan2: PlanSpecification = { width: 20, height: 10, count: 11, axis: "y" }

    return (
        <Card className="h-full flex justify-items-center items-center p-3">
            <div className="flex flex-row w-full justify-between">
                <Button size="small" color="primary"
                onClick={() => setCurrentFloor(currentFloor - 1)}
                isDisabled={currentFloor === 0}
                >Previous Floor </Button>
                <Button size="small" color="primary"
                onClick={() => setCurrentFloor(currentFloor + 1)}
                isDisabled={currentFloor === maxFloor}
                >Next Floor</Button>
            </div>
            {/* left corner div with floor and block informations */}
            <div className="flex flex-col justify-center items-center">
                {currentBlock} - {currentFloor}
            </div>
            {/* plan */}
            <div className={`border-4 border-gray-700 w-min ${plan.axis === 'y' ? 'flex' : ''}`}>
                <div className={`${plan.axis === 'x' ? 'flex' : ''}`}>
                    <Rooms setSelected={setSelected} openModal={onOpenRef} plan={plan}></Rooms>
                    <Staircase width={10} height={10}></Staircase>
                    <Rooms setSelected={setSelected} openModal={onOpenRef} plan={plan}></Rooms>
                </div>
                <Hallway width={10} height={10}></Hallway>
                <Rooms setSelected={setSelected} openModal={onOpenRef} plan={plan2}></Rooms>
            </div>
            <ModalReserve onOpenRef={onOpenRef} selected={selected}></ModalReserve>
        </Card>
    )
}