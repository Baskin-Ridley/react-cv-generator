import React from 'react'
import PersonalInfo from "../forms/PersonalInfo"
import Experience from "../forms/Experience"
import Education from "../forms/Education"

const LeftSide = () => {
  return (
    <div>
        <PersonalInfo />
        <Education/>       
        <Experience/>

        {/*<AddButton/> temporarily in index.tsx*/}
    </div>
  )
}

export default LeftSide