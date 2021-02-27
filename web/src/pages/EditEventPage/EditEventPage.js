import EventsLayout from 'src/layouts/EventsLayout'
import EditEventCell from 'src/components/EditEventCell'

const EditEventPage = ({ id }) => {
  return (
    <EventsLayout>
      <EditEventCell id={id} />
    </EventsLayout>
  )
}

export default EditEventPage
