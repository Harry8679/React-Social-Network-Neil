/* eslint-disable @typescript-eslint/no-explicit-any */

import { AppEvent } from '../../../types/event';
import EventListItem from './EventListItem';

type Props = {
    events: AppEvent[];
    selectEvent: (event: AppEvent) => void;
};

const EventList = ({events, selectEvent}: Props) => {
  return (
    <>
      {events.map(event => (
        <EventListItem key={event.id} event={event} selectEvent={selectEvent} />
      ))}
    </>
  )
}

export default EventList;
