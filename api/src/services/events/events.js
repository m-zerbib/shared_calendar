import { db } from 'src/lib/db'

export const events = async () => {
  const events = await db.event.findMany()
  return events.map((event) => ({
    ...event,
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay,
  }))
}

export const event = async ({ id }) => {
  const event = await db.event.findUnique({
    where: { id },
  })
  if (!event) {
    return event
  }
  const { allDay, start, end, ...rest } = event
  return {
    allDay: allDay,
    start: start,
    end: end,
    ...rest
  }
}

function is_valid_string(value) {
  return typeof value === 'string' && value.trim() !== ''
}

export const createEvent = ({ input }) => {
  const allDay = input.allDay === true ? true : false
  const start = allDay ? new Date().toISOString() : input.start
  const end = allDay ? new Date().toISOString() : input.end
  return db.event.create({
    data: {
      ...input,
      start,
      end,
      allDay: allDay === true ? true : false,
    },
  })
}

export const updateEvent = ({ id, input }) => {
  return db.event.update({
    data: input,
    where: { id },
  })
}

export const deleteEvent = ({ id }) => {
  return db.event.delete({
    where: { id },
  })
}

export const Event = {
  created_by: (_obj, { root }) =>
    db.event.findUnique({ where: { id: root.id } }).created_by(),
}
