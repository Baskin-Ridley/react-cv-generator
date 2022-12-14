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
      <div className="grid lg:grid-cols-6 gap-5 sm:grid-cols-1">
        <div className="border-2 border-blue-500 shadow-lg m-5 p-5  md:col-start-2 md:col-end-4 ">
          <PersonalInfo />
          <h2>Education</h2>
          {components.map((component) => component)}
          <AddButton onClick={addEducationComponent} text="Add Education"/> 
          <h2>Experience</h2> 
          {experienceComponents.map((component) => component)}
          <AddButton onClick={addExperienceComponent} text="Add Experience"/>
        </div>

        <div className="border-2 border-black shadow-lg m-5 p-5 md:col-start-4 md:col-end-6 h-4/6">
          <CVPersonalInfo/>
          <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-500 ml-2">Education</h3>
          {cvEducationList.map((component) => component)}
          <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-500 ml-2">Experience</h3>
          {cvExperienceList.map((component) => component)}
        </div>
      </div>
    </RecoilRoot>
  )
}