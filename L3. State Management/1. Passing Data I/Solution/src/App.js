import "./App.css";
import logo from "./logo.svg";

// Use React and the data below to display a list of users alongside their favorite movies.
// For detailed instructions, refer to Instructions.md.

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

const App = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <ul>
        <h2>Favorite Movies</h2>

        {/*
          For each object in the profiles array, make a list of JSX element.
          The map function returns a new array, which will only have list
          elements in it. React will automatically know how to render an
          array of JSX objects.
          */}
        {profiles.map((profile) => {
          const userName = users[profile.userID].name;
          const favMovieName = movies[profile.favoriteMovieID].name;

          return (
            /*
              You need to include the `key` property every time you create list
              elements in React. The `key` property is necessary because it enables
              React to perform reconciliation (https://reactjs.org/docs/reconciliation.html)
              */
            <li key={profile.id}>
              {/* If the syntax below looks unfamiliar, please take the following
              course:
              https://www.udacity.com/course/es6-javascript-improved--ud356
                */}
              <p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
