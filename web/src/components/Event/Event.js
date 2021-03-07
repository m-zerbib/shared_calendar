import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/EventsCell'

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Event = ({ event }) => {
  const { addMessage } = useFlash()
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.events())
      addMessage('Event deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete event ' + id + '?')) {
      deleteEvent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Event {event.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Title</th>
              <td>{event.title}</td>
            </tr>
            <tr>
              <th>Start time</th>
              <td>{timeTag(event.start)}</td>
            </tr>
            <tr>
              <th>End time</th>
              <td>{timeTag(event.end)}</td>
            </tr>
            <tr>
              <th>Is all day</th>
              <td>{checkboxInputTag(event.allDay)}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{event.description}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{event.id}</td>
            </tr>
            <tr>
              <th>Color tag</th>
              <td>{event.color_tag}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{event.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEvent({ id: event.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(event.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Event
