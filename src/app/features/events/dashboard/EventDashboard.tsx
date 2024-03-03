import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../api/sampleData";
import { useState, useEffect } from "react";
import { AppEvent } from "../../../types/event";

type Props = {
    formOpen: boolean;
    setFormOpen: (value: boolean) => void;
    selectEvent: (event: AppEvent | null) => void;
    selectedEvent: AppEvent | null;
    updateEvent: (event: AppEvent) => void;
}

const EventDashboard = ({ formOpen, setFormOpen, selectEvent, selectedEvent }:Props) => {
    const [events, setEvents] = useState<AppEvent[]>([]);

    useEffect(() => {
        setEvents(sampleData);
    }, []);

    const addEvent = (event: AppEvent) => {
        setEvents(prevState => {
            return [...prevState, event];
        });
    }

    const updateEvent = (updatedEvent: AppEvent) => {
        setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
        selectEvent(null);
        setFormOpen(false);
    };

    const deleteEvent = (eventId: string) => {
        setEvents(events.filter(evt => evt.id !== eventId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                    <EventForm setFormOpen={setFormOpen} updateEvent={updateEvent} addEvent={addEvent} selectedEvent={selectedEvent} key={selectedEvent ? selectedEvent.id : 'create'} />}
            </Grid.Column>
        </Grid>
    );
}

export default EventDashboard;