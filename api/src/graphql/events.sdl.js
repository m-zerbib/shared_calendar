export const schema = gql`
  type Event {
    title: String!
    time: DateTime!
    description: String
    created_by: User!
    id: String!
    color_tag: Color
    userId: String!
    created_by: User!
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
    time: DateTime!
    description: String
    color_tag: Color
    userId: String!
  }

  input UpdateEventInput {
    title: String
    time: DateTime
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
