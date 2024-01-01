/* eslint-disable @typescript-eslint/no-explicit-any */

import { AppEvent } from '../../../types/event';
import EventListItem from './EventListItem';

type Props = {
    events: AppEvent[];
};

const EventList = ({events}: Props) => {
  return (
    <>
      {events.map(event => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  )
}

export default EventList;
