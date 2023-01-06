import "./App.css";
import Combined from "./Combined";
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



const App = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Favorite Movies</h2>

      {profiles.map((profile) => {
        //destructuring 
        const { id, userID, favoriteMovieID } = profile
        //returning a component with the wanted text
        return (
          <Combined key={id} userID={userID} favoriteMovieID={favoriteMovieID} />
        )
      })}
    </div>
  );
};

export default App;
