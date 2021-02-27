import { events, event, createEvent, updateEvent, deleteEvent } from './events'

describe('events', () => {
  scenario('returns all events', async (scenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })

  scenario('returns a single event', async (scenario) => {
    const result = await event({ id: scenario.event.one.id })

    expect(result).toEqual(scenario.event.one)
  })

  scenario('creates a event', async (scenario) => {
    const result = await createEvent({
      input: {
        title: 'String',
        time: '2021-02-27T03:13:44Z',
        userId: 'scenario.event.two.userId',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.time).toEqual('2021-02-27T03:13:44Z')
    expect(result.userId).toEqual('scenario.event.two.userId')
  })

  scenario('updates a event', async (scenario) => {
    const original = await event({ id: scenario.event.one.id })
    const result = await updateEvent({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a event', async (scenario) => {
    const original = await deleteEvent({ id: scenario.event.one.id })
    const result = await event({ id: original.id })

    expect(result).toEqual(null)
  })
})
