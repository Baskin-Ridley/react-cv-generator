import React from 'react'

const RightSide = (props) => {
  return (
    <div>
      {props.components.map((component) => component)}
    </div>
  )
}

export default RightSide