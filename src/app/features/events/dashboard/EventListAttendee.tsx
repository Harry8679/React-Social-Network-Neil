/* eslint-disable @typescript-eslint/no-explicit-any */
import { List, Image } from 'semantic-ui-react';
import { Attendee } from '../../../types/event';

type Props = {
    attendee: Attendee
};

const EventListAttendee = ({ attendee }: Props) => {
  return (
    <List.Item>
      <Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  )
}

export default EventListAttendee
