import { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

type Props = {
    setFormOpen: (value: boolean) => void;
}

const EventForm = ({ setFormOpen }: Props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    console.log(title);
  }
  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
            <input type='text' placeholder='Event title' value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
            <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
            <input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
            <input type='text' placeholder='Venue' />
        </Form.Field>
        <Form.Field>
            <input type='text' placeholder='Date' />
        </Form.Field>

        <Button type='submit' floated='right' positive content='Submit' />
        <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel' />
      </Form>
    </Segment>
  )
}

export default EventForm;
