import React from 'react'

export const Item = ({ index, item }) => {
  return (
    <li key={index}>{item}</li>
  )
}
