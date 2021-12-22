import React from 'react';
import MovieCard from './MovieCard';

/*
Since this component just needs to render some data and does not need to keep
track of the component's internal state, we can make it a Stateless Functional
Component.

If you're having trouble with ES6, plug in the ES6 code into Babel (
https://babeljs.io) to see what it would look like in ES5 and
check out this course: https://www.udacity.com/course/es6-javascript-improved--ud356.
*/
const MovieCardsList = props => {
  /*
  Destructuring via ES6. We're getting the profiles, users, and movies properties
  off of the pros passed into this presentational component. If you need a refresher on this syntax, check
  out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
  */

  const { profiles, users, movies } = props;
  const usersByMovie = {};

  profiles.forEach(profile => {
    const movieID = profile.favoriteMovieID;

    if (usersByMovie[movieID]) {
      usersByMovie[movieID].push(profile.userID);
    } else {
      usersByMovie[movieID] = [profile.userID];
    }
  });

  const movieCards = Object.keys(movies).map(id => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ));

  /*
    Return JSX
    */
  return <ul>{movieCards}</ul>;
};

export default MovieCardsList;
