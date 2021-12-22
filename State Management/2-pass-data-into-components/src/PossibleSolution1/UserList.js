import React, { Component } from "react";

class UserList extends Component {
  render() {
    /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component. If you need a refresher on this syntax, check
    out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
    */
    const { users, usersWhoLikedMovie } = this.props;

    if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
      return <p>None of the current users liked this movie.</p>;
    }

    const listofItems = usersWhoLikedMovie.map(id => (
      <li key={id}>
        <p>{users[id].name}</p>
      </li>
    ));

    return <ul>{listofItems}</ul>;
  }
}

export default UserList;
