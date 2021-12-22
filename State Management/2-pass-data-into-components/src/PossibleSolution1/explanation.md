# Explanation

There are two ways to approach this app. The first is a bottom-up approach and
the second is a top-down approach.

`PossibleSolution1` and `PossibleSolution2` describe two possible results you
could have achieved with either approach.

## Bottom-Up Approach

The bottom-up approach involves two steps: putting all of our code into the
`App./js` file and, once the app renders what you want it to render, you break
that code up into different components. This is a possible approach to the first
step of the bottom-up strategy:

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.usersByMovie = {};

    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID);
      } else {
        this.usersByMovie[movieID] = [profile.userID];
      }
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1>How Popular is Your Favorite Movie?</h1>
        <ul>
          {Object.keys(movies).map(key => {
            const userIDs = this.usersByMovie[movies[key].id];

            return (
              <li key={movies[key].id}>
                <h2>{movies[key].name}</h2>
                <h3>Liked By:</h3>

                {!userIDs ? (
                  <h4>None of the current users liked this movie</h4>
                ) : (
                  ""
                )}

                <ul>
                  {userIDs &&
                    userIDs.map(userId => {
                      return (
                        <li key={userId}>
                          <p>{users[userId].name}</p>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
```

The reason we would need to do step 2 (break down that code into components)
instead of just keeping it as it is above is that this code above is hard to
read, harder to maintain, and impossible to reuse.

To identify the components, we would want to break up the code into sections. For
example, here's a section of the code that corresponds to a particular movie:

```js
<li key={movies[key].id}>
  <h2>{movies[key].name}</h2>
  <h3>Liked By:</h3>

  {!userIDs ? <h4>None of the current users liked this movie</h4> : ""}

  <ul>
    {userIDs &&
      userIDs.map(userId => {
        return (
          <li key={userId}>
            <p>{users[userId].name}</p>
          </li>
        );
      })}
  </ul>
</li>
```

See how the `li` element represents a movie? We can replace that entire `li` chunk
with:

```js
<MovieCard
  key={id}
  users={users}
  usersWhoLikedMovie={usersByMovie[id]}
  movieInfo={movies[id]}
/>
```

Now, we can use the `MovieCard` class to render our dashboard:

```js
<ul>
  {Object.keys(movies).map(id => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ))}
</ul>
```

The entire chunk above can go inside our Dashboard Component.

The list of users who liked a particular movie can either reside inside of the
MovieCard Component(see `PossibleSolution2`) or be its own Component
(see `PossibleSolution1`). In this application, it's a matter of preference
because we won't be reusing the UserList Component elsewhere and the code inside of
the MovieCard Component doesn't look bloated. However, if we were also required
to show a list of all users in our app, we would want to reuse the UserList
Component to do that.

## Top-Down Approach

Now, the top-down approach to making this app involves identifying each
component first and then starting to code. We recommend practicing
this approach because it will help you later in the course,
when you learn about state and your apps become more complex.

An intuitive way of breaking an app into components is to draw what you want
your resulting app to look like and then to physically draw boxes around each
piece of our application - take a look at this article to see an
example of that: https://brotzky.co/blog/react-thinking-in-components.

### How to Know What should be a Component:

Components are reusable chunks that can be nested inside of each other, like
Russian nesting dolls. Each component needs to follow the Single Responsibility
Principle - that is, do only 1 thing.

Oftentimes, the number of components an app should have is subjective, but it is
always the case that they should follow the Single Responsibility Principle,
be reusable, and manageable in size.
