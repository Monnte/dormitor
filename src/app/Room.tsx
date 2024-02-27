interface Props {
    id: string;
    width: number;
    height: number;
}

export function Room({id, width, height}: Props) {
    return (
        <div id={id} className={`w-${width} h-${height}`}></div>
    )
}