export const schema = gql`
  type Event {
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    description: String
    created_by: User!
    id: String!
    color_tag: Color
    userId: String!
  }

  enum Color {
    Yellow
    Green
    Orange
    Red
    Blue
    Purple
    Pink
    Brown
  }

  type Query {
    events: [Event!]!
    event(id: String!): Event
  }

  input CreateEventInput {
    title: String!
    start: String
    end: String
    allDay: Boolean!
    description: String
    color_tag: Color
    userId: String!
  }

  input UpdateEventInput {
    title: String
    start: String
    end: String
    allDay: Boolean
    description: String
    color_tag: Color
    userId: String
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event!
    updateEvent(id: String!, input: UpdateEventInput!): Event!
    deleteEvent(id: String!): Event!
  }
`
