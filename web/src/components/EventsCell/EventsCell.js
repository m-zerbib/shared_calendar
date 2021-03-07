import { Link, routes, navigate } from '@redwoodjs/router'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Events from 'src/components/Events'

const localizer = momentLocalizer(moment)

export const QUERY = gql`
  query EVENTS {
    events {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No events yet. '}
      <Link to={routes.newEvent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ events }) => {
  const [view, setView] = useState("month")
  return (
    <Calendar
      selectable
      view={view}
      // views={['month']}
      onView={setView}
      onSelectEvent={ (event) => {
        navigate(routes.event({ id: event.id }));
      }}
      onDoubleClickEvent={ (event) => {
        navigate(routes.editEvent({ id: event.id }));
      }}
      localizer={localizer}
      events={events.map(event => {
        return {
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        }
      })}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
    />
  )
}

