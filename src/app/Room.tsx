'use client';
import { widthMap, heightMap } from './utils/dimensionMaps'

interface Props {
    id: string;
    width: number;
    height: number;
    onClick: () => void;
    name: string;
    occupied?: boolean;
}

export function Room(props: Props) {
    return (
        <div 
            id={props.id} 
            className={`${widthMap[props.width]} ${heightMap[props.height]} room text-center`} 
            onClick={props.onClick}
            style={{ backgroundColor: props.occupied ? '#ffa6a6' : '#a6ffd7' }}
        > 
            {props.name}
        </div>
    )
}
