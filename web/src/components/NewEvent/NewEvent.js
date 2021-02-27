import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import EventForm from 'src/components/EventForm'

import { QUERY } from 'src/components/EventsCell'

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
    }
  }
`

const NewEvent = () => {
  const { addMessage } = useFlash()
  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.events())
      addMessage('Event created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createEvent({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Event</h2>
      </header>
      <div className="rw-segment-main">
        <EventForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEvent
