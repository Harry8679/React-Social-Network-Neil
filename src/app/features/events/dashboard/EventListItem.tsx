/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { AppEvent } from '../../../types/event';

type Props = {
    event: AppEvent
}

const EventListItem = ({ event }: Props) => {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>
                    Host by {event.hostedBy}
                </Item.Description>
            </Item.Content>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
            <Icon name='clock' /> {event.date}
            <Icon name2='market' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
            {event.attendees.map((attendee: any) => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}

export default EventListItem;
