import React from 'react'
import PersonalInfo from "../forms/PersonalInfo"
import Experience from "../forms/Experience"
import Education from "../forms/Education"
import Buttons from "../buttons/Buttons"

const LeftSide = () => {
  return (
    <div>
        <PersonalInfo/>
        <Experience/>
        <Education/>
        <Buttons/>
    </div>
  )
}

export default LeftSide