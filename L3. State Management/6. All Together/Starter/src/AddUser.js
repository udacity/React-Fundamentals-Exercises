import React from 'react'
import { useState } from "react";

export const AddUser = ({ users, setUsers }) => {

    //states
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        games: 0
    })
    const [userNames, setExistingUserNames] = useState([])


    //function to handle the form changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    };

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userNames.includes(user.userName)) {
            alert('you must chooes a uniqe userName')
        } else {
            setExistingUserNames([...userNames, user.userName])
            setUsers([...users, user])
            setUser({
                firstName: '',
                lastName: '',
                userName: '',
                games: 0
            })

        }
    }
    // validation check variable
    const formValidation = () => {
        const { firstName, lastName, userName } = user;
        return firstName !== '' && lastName !== '' && userName !== '' ? false : true
    }

    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='firstName' name="firstName" value={user.firstName} onChange={handleInputChange} />
                    <input type="text" placeholder='lastName' name="lastName" value={user.lastName} onChange={handleInputChange} />
                    <input type="text" placeholder='userName' name="userName" value={user.userName} onChange={handleInputChange} />
                    <label htmlFor='NumberOfGames'>Number Of Games</label>
                    <input type="number" placeholder='games' name="games" style={{ width: '25px' }} min='0' value={user.games} onChange={handleInputChange} id='NumberOfGames' />
                    <button
                        className='bg-green-700 border-black rounded w-28 text-center mx-auto mb-4 px-2 py-1 text-white cursor-pointer hover:bg-slate-600 transition-all '
                        disabled={formValidation()} type={'submit'}> Add user</button>
                </form>
            </div>
        </>
    )
}
