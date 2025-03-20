// Instead of passing in the entire props object, we are destructuring via ES6.
// That is, we're getting the profiles, users, and movies properties from the props
// passed into this component. If you need a refresher on this syntax, check
// out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
const MovieCard = ({ users, usersWhoLikedMovie, movieInfo }) => {
  return (
    <li key={movieInfo.id}>
      <h2>{movieInfo.name}</h2>
      <h3>Liked By:</h3>

      {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
        <p>None of the current users liked this movie.</p>
      ) : (
        <ul>
          {usersWhoLikedMovie &&
            usersWhoLikedMovie.map((userId) => {
              return (
                <li key={userId}>
                  <p>{users[userId].name}</p>
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
};

export default MovieCard;
