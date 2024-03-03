import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../api/sampleData";
import { useState, useEffect } from "react";
import { AppEvent } from "../../../types/event";

type Props = {
    formOpen: boolean;
    setFormOpen: (value: boolean) => void;
}

const EventDashboard = ({formOpen, setFormOpen}:Props) => {
    const [events, setEvents] = useState<AppEvent[]>([]);
    const [selectedEvent, setElectedEvent] = useState<AppEvent | null>(null);

    useEffect(() => {
        setEvents(sampleData);
    }, []);

    const addEvent = (event: AppEvent) => {
        setEvents(prevState => {
            return [...prevState, event];
        });
    }

    const handleSelectedEvent = (event: AppEvent) => {
        setElectedEvent(event);
        setFormOpen(true);
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={handleSelectedEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                    <EventForm setFormOpen={setFormOpen} addEvent={addEvent} selectedEvent={selectedEvent} />}
            </Grid.Column>
        </Grid>
    );
}

export default EventDashboard;