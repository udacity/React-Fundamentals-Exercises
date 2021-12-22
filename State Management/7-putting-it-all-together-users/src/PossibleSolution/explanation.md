### Explanation

Remember to follow these steps from the [Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html):

#### Step 1: Break down the app into a hierarchy of components. Draw a box around each React component.

Our Component Hierarchy:

```
|- App
|- AddUser
|- UserList
|-- User
```

Step 2: Determine the data in our app.

1.  new first name (shown inside the AddUser Component)

2.  new last name (shown inside the AddUser Component)

3.  new username (shown inside the AddUser Component)

4.  users (needed to show a list of users inside UserList and to determine
    whether we're trying to add a username that already exists)

5.  userExists (needed to be able to show the error message when we're trying
    to add a username that already exists. If we'd put the conditional of checking
    whether the username already exists inside the render method instead, the
    message would appear every time the render method runs. (Remember that the
    render method runs every time the component's state or the props passed to the
    component are changed.) In our app, we just need to show the message when the
    "Add" button is clicked, so it makes sense to have this piece of state
    inside of the AddUser Component.

6.  showGamesPlayed (needed to be able to toggle between showing the number of
    games the users played and hiding that information)

7.  username (shown in the UserList)

8.  number of games played (which defaults to 0)

#### Step 3: To figure out the data that should be a part of our state:

a) Is it passed in from a parent via props? If so, it probably isn’t state.

b) Does it remain unchanged over time? If so, it probably isn’t state.

c) Can you compute it based on any other state or props in your component?
If so, it isn’t state.

1.  new first name - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

2.  new last name - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

3.  new username - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

4.  users - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

5.  userExists - this piece of data changes based on new input. It is
    technically possible to compute this data based on other state and
    props. However, if we put that code into the render method, we'll be seeing the
    error message every time the username is changed, not when the "Add" button
    is clicked.

6.  showGamesPlayed - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

7.  username - can be computed from the `users` piece of state -> not state.

8.  number of games played - can be computed from the users piece of state ->
    not state.

#### Step 4: Identify where each piece of state lives.

a) Identify every component that renders something based on that state.

b) If multiple components need the same piece of state, put that piece
of state into those components' parent-most component.

If you can’t find a component where it makes sense to own the state, create
a new component simply for holding the state and add it somewhere in the
hierarchy above the common owner component.

(1) users:

a) The UserList renders the `users` piece of state. The AddUser Component renders
the error message based on whether the users already include the new user's
username.

b) In order for both of these components to access the `users` piece of
state, we need to lift state up to their parent-most component - the App
Component.

(2) new first name:

a) This piece of state should live in the AddUser Component because we need to
have a single source of truth in React. This component will fully control
what's rendered on the screen when we type something and what happens to the
input.

(3) new last name:

a) This piece of state should live in the AddUser Component because we need to
have a single source of truth in React. This component will fully control
what's rendered on the screen when we type something and what happens to the
input.

(4) new username:

a) This piece of state should live in the AddUser Component because we need to
have a single source of truth in React. This component will fully control
what's rendered on the screen when we type something and what happens to the
input.

(5) userExists:

a) This piece of state should live in the AddUser Component because that's the
component that will need to show an error message if this username already exists.

(6) showGamesPlayed:

a) The components that need this piece of state are the UserList Component and
the User Component. The UserList Component needs it because of 2 reason. First, this component is responsible for changing the wording on the button from "Show the Number of Games Played" to "Hide the Number of Games Played." Second, the UserList component is responsible for rendering the User Component, which needs access to this piece of state to know whether to show the number of game of games played or hide that by printing a `*` symbol instead.

b) Since UserList is the parent-most element for the User Component and UserList Component, we can store this piece of state there.

#### Step 5. Add Inverse Data Flow.

Parent components can pass pieces of state as props, and they can also pass
callbacks as props. Callbacks are passed in order to allow child components
to pass data back to the parent. Remember that state cannot be modified outside
of the component where it is defined, so our AddUser Component cannot just add
a new user to our list of users that's stored in the state inside of the App
Component.

To be able to get new users, the App Component passes a callback to the AddUser Component as the `onAddUser` prop. When a new user is added, the AddUser Component runs the callback function, enabling the new user to be passed to the App Component.
