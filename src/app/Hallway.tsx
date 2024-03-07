import { minHeightMap, minWidthMap } from "./utils/dimensionMaps"

interface Size {
    width?: number, 
    height?: number,
}

export function Hallway(size: Size) {
    return (
        <div className={`${size.width ? minWidthMap[size.width] : 'min-w-1'} ${size.height ? minHeightMap[size.height] : `min-h-1`}`}></div>
    )
}
