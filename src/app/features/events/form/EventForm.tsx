import { ChangeEvent, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

type Props = {
    setFormOpen: (value: boolean) => void;
}

const EventForm = ({ setFormOpen }: Props) => {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }
  
  const [values, setValues] = useState(initialValues);

  const handleSubmit = () => {
    console.log(values);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
            <input type='text' placeholder='Event title' name='title' value={values.title} onChange={e => handleInputChange(e)} />
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
