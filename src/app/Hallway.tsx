interface Size {
    width?: number, 
    height?: number,
}

export function Hallway(size: Size) {
    const minW = `min-w-${size.width}`
    const minH = `min-h-${size.height}`
    return (
        <div className={`${size.width ? minW : 'min-w-1'} ${size.height ? minH : `min-h-1`}`}></div>
    )
}