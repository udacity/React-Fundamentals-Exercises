# Passing Data II

Let's do something a little bit more challenging than the previous exercise. Instead of displaying a list of users and their movies, this time you need to display a list of movies.

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the development server.
3. Open `./src/App.js`.
4. For each movie in the list, there are two options:

- Option 1: If the movie has been favorited, display a list of all of the users who said that this movie was their favorite.
- Option 2: If the movie has _not_ been favorited, display some text stating that no one favorited the movie.

As you go about tackling this exercise, try to make the app _modular_ by breaking it into resusable React components.

## Example

```html
<h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
  <li>Nicholas Lain</li>
</ul>

<h2>Get Out</h2>
<p>Liked By:</p>
<ul>
  <li>John Doe</li>
  <li>Autumn Green</li>
</ul>

<h2>Autumn Green</h2>
<p>None of the current users liked this movie</p>
```
