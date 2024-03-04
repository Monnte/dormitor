'use client';
import { widthMap, heightMap } from './utils/dimensionMaps'

interface Props {
    id: string;
    width: number;
    height: number;
    onClick: () => void;
}

export function Room(props: Props) {
    return (
        <div id={props.id} className={`${widthMap[props.width]} ${heightMap[props.height]} room text-center`} onClick={props.onClick}
        > {props.id}</div>
    )
}