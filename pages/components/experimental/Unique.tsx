//@ts-nocheck
import React from 'react'
import { nanoid } from 'nanoid'


const Unique = () => {
    var id
    id = nanoid()
  return (
    <div>{id}</div>
  )
}

export default Unique