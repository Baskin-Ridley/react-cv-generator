import { useState } from "react"
import LeftSide from "./components/sides/LeftSide"
import RightSide from "./components/sides/RightSide"
import Unique from "./components/experimental/Unique"
import { AddButton } from "./components/buttons/AddButton"
import PersonalInfo from "./components/forms/PersonalInfo"
import Education from "./components/forms/Education"
import Experience from "./components/forms/Experience"
import CVEducation from "./components/cvPreview/CVEducation"
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

  function addComponent() {   
    var id = nanoid()
    setComponents([...components, <Education id={id}/>])
    setCvEducationList([...cvEducationList, <CVEducation id={id}/>]) 
  } 

  return (

    <RecoilRoot>
      <div className="grid grid-cols-2">
        <div>
          <PersonalInfo />
          <h2>Education</h2>
          {components.map((component) => component)}
          <AddButton onClick={addComponent} text="Add Education"/>                  
          <Experience/>
        </div>
        <div className="">
          {cvEducationList.map((component) => component)}
          <RightSide cvEducation={components}/>
        </div>
      </div>
    </RecoilRoot>
  )
}