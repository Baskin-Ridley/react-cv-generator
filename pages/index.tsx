import { useState } from "react"
import { AddButton } from "./components/buttons/AddButton"
import PersonalInfo from "./components/forms/PersonalInfo"
import Education from "./components/forms/Education"
import Experience from "./components/forms/Experience"
import CVEducation from "./components/cvPreview/CVEducation"
import CVExperience from "./components/cvPreview/CVExperience"
import CVPersonalInfo from "./components/cvPreview/CVPersonalInfo"
import { nanoid } from 'nanoid'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export default function Home() {

  var id = nanoid()
  const [components, setComponents] = useState([<Education id={id}/>]); 
  const [cvEducationList, setCvEducationList] = useState([<CVEducation id={id}/>]);
  const [experienceComponents, setExperienceComponents] = useState([<Experience id={id}/>]);
  const [cvExperienceList, setCvExperienceList] = useState([<CVExperience id={id}/>]);

  function addEducationComponent() {   
    var id = nanoid()
    setComponents([...components, <Education id={id}/>])
    setCvEducationList([...cvEducationList, <CVEducation id={id}/>]) 
  } 

  function addExperienceComponent() {
    var id = nanoid()
    setExperienceComponents([...experienceComponents, <Experience id={id}/>])
    setCvExperienceList([...cvExperienceList, <CVEducation id={id}/>])
  }

  return (

    <RecoilRoot>
      <div className="grid grid-cols-2">
        <div>
          <PersonalInfo />
          <h2>Education</h2>
          {components.map((component) => component)}
          <AddButton onClick={addEducationComponent} text="Add Education"/> 
          <h2>Experience</h2> 
          {experienceComponents.map((component) => component)}
          <AddButton onClick={addExperienceComponent} text="Add Experience"/>
        </div>
        <div className="">
          <CVPersonalInfo/>
          <h2>Education</h2>
          {cvEducationList.map((component) => component)}
          <h2>Experience</h2>
          {cvExperienceList.map((component) => component)}
        </div>
      </div>
    </RecoilRoot>
  )
}