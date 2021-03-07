import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import EventForm from 'src/components/EventForm'

export const QUERY = gql`
  query FIND_EVENT_BY_ID($id: String!) {
    event: event(id: $id) {
      title
      start
      end
      allDay
      description
      id
      color_tag
      userId
    }
  }
`
const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: String!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      title
      start
      end
      allDay
      description
      id
      color_tag
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ event }) => {
  const { addMessage } = useFlash()
  const [updateEvent, { loading, error }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.events())
      addMessage('Event updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateEvent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Event {event.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventForm
          event={event}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
