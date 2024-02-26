export function Room({width, height}: Record<string, number>) {
    return (
        <div className={`w-${width} h-${height}`}></div>
    )
}