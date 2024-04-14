//@ts-ignore
'use client';
import { Card } from "@nextui-org/card";
import { Rooms } from "./Rooms";
import { Hallway } from "./Hallway";
import { Staircase } from "./Staircase";
import { Button } from "@nextui-org/react";
import ModalReserve from "./modal";
import { useRef, useState, useContext} from "react";
import { UIContext } from "./providers";
import { data } from "./data/data";
import { Floors } from "./Floors";


export interface PlanSpecification {
    width: number,
    height: number,
    count: number,
    axis: 'x' | 'y',
}

export function Plan() {
    const { currentFloor, currentBlock, setCurrentFloor, setCurrentBlock } = useContext(UIContext);
    const onOpenRef = useRef(null);
    const currentBlockName = data[currentBlock].block;
    const [selected, setSelected] = useState(data[currentBlock].details[currentFloor][0]);
    let indexLast = 0;

    return (
        <Card className="h-full flex justify-items-center items-center p-3">
            <div className="flex flex-row w-full px-6">
                <Button size="lg" color="default" variant="ghost" className="floor-btn"
                    onClick={() => setCurrentFloor(currentFloor - 1)}
                    isDisabled={currentFloor === 0}
                >Previous Floor </Button>
                <Button size="lg" color="default" variant="ghost" className="floor-btn"
                    onClick={() => setCurrentFloor(currentFloor + 1)}
                    isDisabled={currentFloor === data[currentBlock].plan.length - 1}
                >Next Floor</Button>
            </div>
            <div className="flex w-full items-center gap-4">
                <Floors 
                    plan={{ width: 20, height: 10, count: data[currentBlock].plan.length, axis: "y" }}
                    currentFloor={currentFloor}
                    >
                </Floors>
                <div className="flex justify-center grow">
                    <div>
                        {/* left corner div with floor and block informations */}
                        <div className="flex flex-col justify-center items-center">
                            Block: {currentBlockName} - {(currentFloor + 1).toString().padStart(2, '0')}
                        </div>
                        {/* plan */}
                        <div className={`border-4 border-gray-700 w-min ${'y' === 'y' ? 'flex' : ''}`}>
                            {data[currentBlock].plan[currentFloor].map((item) => {
                                return <div className={``}>
                                    {item.map((i) => {
                                        if (i.type === 'r') {
                                            let indexes = Array.from({ length: i.count }, (_, i) => i + indexLast + 1);
                                            indexLast += i.count;
                                            return <Rooms
                                                setSelected={setSelected}
                                                openModal={onOpenRef}
                                                plan={{ width: 20, height: 10, count: i.count, axis: "y" }}
                                                indexes={indexes}
                                                currentFloor={currentFloor}
                                                currentBlock={currentBlock}
                                            >
                                            </Rooms>
                                        } else if (i.type === 'h') {
                                            return <Hallway width={10} height={10}></Hallway>
                                        } else if (i.type === 's') {
                                            return <Staircase width={10} height={10}></Staircase>
                                        }
                                    })}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <ModalReserve onOpenRef={onOpenRef} selected={selected}></ModalReserve>
            </div>
        </Card>
    )
}