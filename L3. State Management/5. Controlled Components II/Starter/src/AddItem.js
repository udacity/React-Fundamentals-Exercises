import React from 'react'

export const AddItem = ({ inputIsEmpty, items, value, setItems, setValue }) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const addItem = (event) => {
        event.preventDefault();
        setItems([...items, value]);
        setValue("");
    };

    return (
        <>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={value}
                    onChange={handleChange}
                />
                <button disabled={inputIsEmpty()}>Add</button>
            </form>
        </>
    )
}
