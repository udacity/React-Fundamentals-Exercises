import React from 'react'

export const User = ({ user, index, showGames }) => {
    const { firstName, lastName, userName, games } = user
    return (
        <>
            <div className='flex justify-around pb-3'>
                <div className='w-1/4'> {`${index}-${firstName}`}</div>
                <div className='w-1/4'>{lastName}</div>
                <div className='w-1/4'>{userName}</div>
                <div className='w-1/4'>{showGames ? games : '*'}</div>
            </div>

        </>
    )
}
