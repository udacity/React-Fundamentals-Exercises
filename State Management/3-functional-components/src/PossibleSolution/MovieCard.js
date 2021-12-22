import React from 'react';

/*
Since this component doesn't need to hold state, we can make it a Stateless
Functional Component.
*/
const MovieCard = props => {
  /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component. If you need a refresher
    on this syntax, check out this course:
    https://www.udacity.com/course/es6-javascript-improved--ud356
    */
  const { users, usersWhoLikedMovie, movieInfo } = props;

  return (
    <li key={movieInfo.id}>
      <h2>{movieInfo.name}</h2>
      <h3>Liked By:</h3>

      {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
        <p>None of the current users liked this movie.</p>
      ) : (
        <ul>
          {usersWhoLikedMovie &&
            usersWhoLikedMovie.map(userId => {
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
