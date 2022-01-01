// Instead of passing in the entire props object, we are destructuring via ES6.
// That is, we're getting the profiles, users, and movies properties from the props
// passed into this component. If you need a refresher on this syntax, check
// out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
const UserList = ({ users, usersWhoLikedMovie }) => {
  if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
    return <p>None of the current users liked this movie.</p>;
  }

  const listofItems = usersWhoLikedMovie.map((id) => (
    <li key={id}>
      <p>{users[id].name}</p>
    </li>
  ));

  return <ul>{listofItems}</ul>;
};

export default UserList;
