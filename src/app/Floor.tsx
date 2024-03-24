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

    const getBackgroundColor = () => {
        if (props.occupied === props.capacity) {
            return '#ffa6a6';
        }
        if (props.occupied >= props.capacity * 2 / 3) {
            return '#ffd3c0';
        }
        if (props.occupied >= props.capacity / 3) {
            return '#faefce';
        }


        return '#f0f0f0';
    }

    return (
        <div 
        className={`h-full floor ${props.index === currentFloor ? 'current' : '' }` }
        style={{ backgroundColor: getBackgroundColor() }}
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
