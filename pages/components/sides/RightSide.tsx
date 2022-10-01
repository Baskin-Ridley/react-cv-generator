import React from 'react'

const RightSide = (props: { components: any[] }) => {
  return (
    <div>

      <div className="bg-green-200 h-20"></div>
      <div className="grid grid-cols-5">
        <div className="bg-blue-200 col-span-4 h-10"></div>
        <div className="bg-red-200 col-span-1 h-10"></div>
      </div>


      
      {props.components.map((component) => component)}
    </div>
  )
}

export default RightSide