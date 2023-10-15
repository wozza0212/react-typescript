const EventComponent: React.FC = () => {
    return (
        <div>
            <h3>Event Component</h3>
            <input onChange={(e) => console.log(e)} />
        </div>
    )
}

export default EventComponent;