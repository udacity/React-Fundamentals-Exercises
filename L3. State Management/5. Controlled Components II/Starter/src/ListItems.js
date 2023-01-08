import React from 'react'
import { Item } from './Item'

export const ListItems = ({ items }) => {
    return (
        <>
            <ol className="item-list">
                {items.map((item, index) => (
                    <Item item={item} index={index} />
                ))}
            </ol>
        </>
    )
}
