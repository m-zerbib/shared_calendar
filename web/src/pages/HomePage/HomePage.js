import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { QUERY } from 'src/components/EventsCell'
const localizer = momentLocalizer(moment)


const HomePage = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={QUERY}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
    />
  </div>
)

export default HomePage
