const EventComponent: React.FC = () => {
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('I am being dragged', event)
    }
    return (
        <div>
            <h3>Event Component</h3>
            {/* <input onChange={(e) => console.log(e)} /> */}
            <div>
                <input onChange={onChange} />
            </div>
            <div draggable onDragStart={onDragStart}>
                <h4>Drag Me</h4>
            </div>
        </div>
    )
}

export default EventComponent;