'use client';

import { useContext } from "react";
import { UIContext } from "./providers";

interface Props {
    id?: string;
    index: number;
    number: number;
    occupied: number;
    capacity: number;
    onClick?: () => void;
}

export function Floor(props: Props) {
    const { currentFloor, setCurrentFloor } = useContext(UIContext);
    return (
        <div 
        className={`h-full floor ${props.index === currentFloor ? 'current' : '' }` }
        style={{ backgroundColor: props.occupied >= props.capacity/2 ? '#ffa6a6' : '#a6ffd7' }}
        >
            <div 
                id={props.id} 
                className={`p-2 h-full flex flex-col floor-inner justify-between ${props.index === currentFloor ? 'current' : '' }` }
                onClick={() => setCurrentFloor(props.index)}
            > 
                <p>{props.number}.</p>
                <p className="self-end">{props.occupied}/{props.capacity}</p>
            </div>
        </div>
    )
}
