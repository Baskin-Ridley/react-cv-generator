import { useState } from "react"
import LeftSide from "./components/sides/LeftSide"
import RightSide from "./components/sides/RightSide"
import Unique from "./components/experimental/Unique"
import { AddButton } from "./components/buttons/AddButton"
import PersonalInfo from "./components/forms/PersonalInfo"
import Education from "./components/forms/Education"
import Experience from "./components/forms/Experience"
import { nanoid } from 'nanoid'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export default function Home() {

  const [components, setComponents] = useState([<Education id = {nanoid()}/>]); 
  
  function addComponent() {   
    setComponents([...components, <Education id = {nanoid()}/>]) 
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
          <RightSide components={components}/>
        </div>
      </div>
    </RecoilRoot>
  )
}