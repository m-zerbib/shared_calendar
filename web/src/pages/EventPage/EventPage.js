import EventsLayout from 'src/layouts/EventsLayout'
import EventCell from 'src/components/EventCell'

const EventPage = ({ id }) => {
  return (
    <EventsLayout>
      <EventCell id={id} />
    </EventsLayout>
  )
}

export default EventPage
