interface Size {
    width?: number, 
    height?: number,
}

export function Staircase(size: Size) {
    let stairs = [];
    for (let i=0; i<10; i++) {
        stairs.push(<div className="grow"></div>)
    }
    let stairsComponent = <div className="flex h-1/3 border divide-x divide-gray-700 border-gray-700">{stairs}</div>;
    const minW = `min-w-${size.width}`
    const minH = `h-${size.height}`
    return (
        <div className={`${size.width ? minW : 'min-w-1'} ${size.height ? minH : `min-h-1`} flex flex-col`}>
            {stairsComponent}
            <div className="h-1/3"></div>
            {stairsComponent}
        </div>
    )
}