import { db } from 'src/lib/db'

export const events = () => {
  return db.event.findMany()
}

export const event = ({ id }) => {
  return db.event.findUnique({
    where: { id },
    include: { created_by: true }
  })
}

export const createEvent = ({ input }) => {
  return db.event.create({
    data: input,
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
