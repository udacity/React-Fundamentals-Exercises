import React from 'react'
import { Card } from './Card'

export const CardsList = ({ movies, users, usersFavoriteMovie }) => {
    const moviesCards = Object.keys(movies).map((id) => {
        // console.log(users);
        return (
            <Card
                users={users}
                usersWhoLikedMovie={usersFavoriteMovie[id]}
                movieInfo={movies[id]}
            />
        )
    })
    return (
        <>
            {moviesCards}
        </>
    )
}
