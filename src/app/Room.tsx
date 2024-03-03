import {widthMap, heightMap} from './utils/dimensionMaps'

interface Props {
    id: string;
    width: number;
    height: number;
}

export function Room(props: Props) {
    return (
        <div id={props.id} className={`${widthMap[props.width]} ${heightMap[props.height]}`}></div>
    )
}