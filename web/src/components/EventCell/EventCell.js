import Event from 'src/components/Event'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Event not found</div>

export const Success = ({ event }) => {
  return <Event event={event} />
}
