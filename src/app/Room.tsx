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
    const occupancy = Number(props.occupied) | 0 ;
    return (
        <div 
            id={props.id} 
            className={`${widthMap[props.width]} ${heightMap[props.height]} room text-center`} 
            onClick={props.onClick}
            style={{ backgroundColor: occupancy == 2 ? '#ffa6a6' : occupancy == 1 ? '#ffd3c0' : '#f0f0f0' }}
        > 
            {props.name}
            <div style={{ fontSize: '0.6rem' }}>
                {occupancy} / 2
            </div>
        </div>
    )
}
