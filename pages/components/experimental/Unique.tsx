
import React from 'react'
import { nanoid } from 'nanoid'


const Unique = (props: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {

  return (
    <div>{props.id}</div>
  )
}

export default Unique