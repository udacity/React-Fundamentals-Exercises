import React from 'react'

export default function Combined({ userID, favoriteMovieID }) {
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
    // filtering both the movies and users objects to get the one matched the passed props  
    const user = users[`${userID}`].name
    const movie = movies[`${favoriteMovieID}`].name

    return (
        <>
            <p>{user} favourite movie is {movie}</p>
        </>
    )
}
