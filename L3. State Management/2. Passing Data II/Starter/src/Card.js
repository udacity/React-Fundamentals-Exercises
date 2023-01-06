import React from 'react'

export const Card = ({ users, usersWhoLikedMovie, movieInfo }) => {
    // console.log(users);
    return (
        <>
            <li key={movieInfo.id}>
                <h2>{movieInfo.name}</h2>
                <h3>Liked By:</h3>
                {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (<p>ther are no users that liked this movie</p>) :
                    (<ul>
                        {usersWhoLikedMovie.map((id) => {
                            return (<li key={id}>
                                <p>{users[id].name}</p>
                            </li>)
                        })}
                    </ul>)
                }
            </li>
        </>
    )
}
