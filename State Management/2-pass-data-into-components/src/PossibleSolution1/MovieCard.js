import React, { Component } from "react";
import UserList from "./UserList";

class MovieCard extends Component {
  render() {
    /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component. If you need a
    refresher on this syntax, check out this course:
    https://www.udacity.com/course/es6-javascript-improved--ud356
    */
    const { users, usersWhoLikedMovie, movieInfo } = this.props;

    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>
        <UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
      </li>
    );
  }
}

export default MovieCard;
