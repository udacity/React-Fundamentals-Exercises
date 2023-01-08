import React from 'react'

export const DeleteItem = ({ noItemsFound, setItems,items }) => {

    const deleteLastItem = (event) => {
        setItems(items.slice(0, -1));
    };
    return (
        <>
            <button onClick={deleteLastItem} disabled={noItemsFound()}>
                Delete Last Item
            </button>
        </>
    )
}
