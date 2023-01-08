import React, { useState } from 'react'
import { User } from './User'

export const UsersList = ({ users }) => {
  const [showGames, setShowGmaes] = useState(true)
  const handleShowGames = () => {
    setShowGmaes(!showGames)
  }
  return (
    <>
      <div
        className='bg-cyan-700 border-black rounded w-28 text-center mx-auto mb-4 px-2 py-1 text-white cursor-pointer hover:bg-slate-600 transition-all '
        onClick={handleShowGames}
      >{showGames ? 'hide games' : 'show games'}</div>
      <div className=' shadow justify-center mx-auto pl-5 pb-2 w-1/2 bg-gray-300 rounded '>
        <div className='flex justify-around py-3 ' >
          <div className='w-1/4'>first name</div>
          <div className='w-1/4'>last name</div>
          <div className='w-1/4'>userName</div>
          <div className='w-1/4'> number of games played</div>
        </div>
        {users.map((user, index) => {

          return (<div>
            < User key={user.userName} user={user} index={index + 1} showGames={showGames} />
          </div>)
        }
        )}
      </div>

    </>
  )
}
