import { Link, routes } from '@redwoodjs/router'

import Events from 'src/components/Events'

export const QUERY = gql`
  query EVENTS {
    events {
      title
      time
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
  return <Events events={events} />
}
