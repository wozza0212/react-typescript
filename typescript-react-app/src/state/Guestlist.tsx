import { useState } from "react";
import UserSearch from "./UserSearch";
import EventComponent from "../events/EventComponent";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<String[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map(guest => <li key={guest.toString()}>{guest}</li>)}
            </ul>

            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClick}>Add Guest</button>
            <UserSearch />
            <EventComponent />

        </div>
    )
}

export default GuestList;