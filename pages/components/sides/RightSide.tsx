import React from 'react'

const RightSide = (props: { components: any[] }) => {
  return (
    <div>
      {props.components.map((component) => component)}
    </div>
  )
}

export default RightSide