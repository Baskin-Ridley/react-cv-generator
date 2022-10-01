import { useState } from "react"
import LeftSide from "./components/sides/LeftSide"
import RightSide from "./components/sides/RightSide"
import Unique from "./components/experimental/Unique"
import { AddButton } from "./components/buttons/AddButton"
import { nanoid } from 'nanoid'

export default function Home() {

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    description: '',
  })

  const [components, setComponents] = useState([<Unique id = {nanoid()}/>]); 
  
  function addComponent() {   
    setComponents([...components, <Unique id = {nanoid()}/>]) 
  } 


  return (
    <div className="grid grid-cols-2">
      <div>
        <LeftSide/>
        {components.map((component) => component)}
        <AddButton onClick={addComponent} text="Add ID"/> 
      </div>

      <div className="hidden lg:block">
        <RightSide components = {components}/>
      </div>

    </div>
  )
}