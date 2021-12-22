### Explanation

Remember to follow these steps from the Thinking in React Guide
(https://reactjs.org/docs/thinking-in-react.html):

#### Step 1: Break down the app into a hierarchy of components. Draw a box around each React component.

Our Component Hierarchy:

```
|- App
|- ChatWindow
|-- MessageHistory
|-- AddMessage
```

#### Step 2: Determine the data in our app.

(1) user (shown at the top of the ChatWindow; it is also needed to know who sent
a particular message)

(2) users (needed to show a chat window for each user)

(3) messages (shown inside the message history, which is inside of both chat windows)

(4) new message text (shown inside the AddMessage Component; it also needs to
be added to our message history)

#### Step 3: To figure out the data that should be a part of our state:

a) Is it passed in from a parent via props? If so, it probably isn’t state.

b) Does it remain unchanged over time? If so, it probably isn’t state.

c) Can you compute it based on any other state or props in your component?
If so, it isn’t state.

1.  user - can be computed from the users piece of state -> not state.

2.  users - remains unchanged over time (because we're given these 2 users)->
    not state.

3.  messages - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

4.  new message text - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

#### Step 4: Identify where each piece of state lives.

a) Identify every component that renders something based on that state.

b) If multiple components need the same piece of state, put that piece
of state into those components' parent-most component.

If you can’t find a component where it makes sense to own the state, create
a new component simply for holding the state and add it somewhere in the
hierarchy above the common owner component.

(1) messages:

a) MessageHistory in both ChatWindow Components.

b) The parent of both ChatWindow Components is the App Component, so the
`messages` piece of state should live there.

(2) new message text:

a) AddMessage Component.

b) This is the only component that renders something based on this state, so
the `new message` piece of state can live inside of the AddMessage Component.

#### Step 5. Add Inverse Data Flow.

Parent components can pass pieces of state as `props`, and they can also pass
callbacks as `props`. Callbacks are passed in order to allow child components
to pass data back to the parent. Remember that state cannot be modified outside
of the component where it is defined.

The App Component stores the `messages` piece of state. Users can add new messages, however. And we want to be able to display those new messages. In order to do that, we will need to pass a callback from the App Component down to the AddMessage Component.

This is what our App Component looks like:

```js
<div className="container">
  {users.map(user => (
    <ChatWindow
      key={user.username}
      user={user}
      messages={messages}
      onMessage={this.onMessage}
    />
  ))}
</div>
```

How do we pass a callback from the App Component to the AddMessage Component if the AddMessage Component isn't inside of the App Component?

Trick question! The AddMessage Component _is_ inside of the App Component although we don't see it in the code above. The AddMessage Component is inside of the ChatWindow component. That's why it is so important to plan out your application and draw your app hierarchy _before_ starting to code - you'll able to see which components are nested inside other components right away and be able to figure out which callbacks will be passed, which component(s) will be passing them, and which component(s) will be receiving them.

Here, we pass a callback from the App Component to the ChatWindow Component, and the ChatWindow Component will pass it to the AddMessage component. Things can get confusing when we're passing things through multiple layers, and it's helpful to use the React Chrome extension to see the state of `state` inside each component as well as use `console.log` statements in each component the callback passes through to make sure everything's executing as you'd intended.
