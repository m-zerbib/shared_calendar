// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import IndexPage from "src/pages/IndexPage"
const Routes = () => {
  return (
    <Router>
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/events/new" page={NewEventPage} name="newEvent" />
      <Route path="/events/{id}/edit" page={EditEventPage} name="editEvent" />
      <Route path="/events/{id}" page={EventPage} name="event" />
      <Route path="/events" page={EventsPage} name="events" />
      <Route path="/" page={IndexPage} />
    </Router>
  )
}

export default Routes
