interface Size {
    width?: number, 
    height?: number,
}

export function Hallway(size: Size) {
    return (
        <div className={`${size.width ? `min-w-${size.width}` : 'min-w-1'} ${size.height ? `min-h-${size.height}` : `min-h-1`}`}></div>
    )
}