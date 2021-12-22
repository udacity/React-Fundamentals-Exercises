# Instructions

Use React and the `profiles`, `users`, and `movies` data in `App.js` to display a list of users alongside their favorite movies.

## Example

The `users` object has the user "Jane Cruz":

```js
const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  }
  .
  .
  .
};
```

And the `profiles` array has a combination of which users like which movies:

```js
const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  .
  .
  .
];
```

From this information, one of the list items might look like this:

> Jane Cruz's favorite movie is Planet Earth 1.
