import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/EventsCell'

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const EventsList = ({ events }) => {
  const { addMessage } = useFlash()
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      addMessage('Event deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete event ' + id + '?')) {
      deleteEvent({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Is all day</th>
            <th>Description</th>
            <th>Id</th>
            <th>Color tag</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{truncate(event.title)}</td>
              <td>{timeTag(event.start)}</td>
              <td>{timeTag(event.end)}</td>
              <td>{checkboxInputTag(event.allDay)}</td>
              <td>{truncate(event.description)}</td>
              <td>{truncate(event.id)}</td>
              <td>{truncate(event.color_tag)}</td>
              <td>{truncate(event.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.event({ id: event.id })}
                    title={'Show event ' + event.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEvent({ id: event.id })}
                    title={'Edit event ' + event.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete event ' + event.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(event.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsList
