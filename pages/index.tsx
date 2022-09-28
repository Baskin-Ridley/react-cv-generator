import { useState } from "react"
import LeftSide from "./components/sides/LeftSide"
import RightSide from "./components/sides/RightSide"
import Unique from "./components/experimental/Unique"
import { AddButton } from "./components/buttons/AddButton"
import { nanoid } from 'nanoid'

export default function Home() {

  const [components, setComponents] = useState([<Unique id = {nanoid()}/>]); 
  
  function addComponent() { 
    
    setComponents([...components, <Unique id = {nanoid()}/>]) 
    console.log(components)
  } 


  return (
    <div className="grid grid-cols-2">
      <div>
        <LeftSide/>
        <AddButton onClick={addComponent} text="Add ID"/> 
        {components.map(() => ( <Unique id = {nanoid()}/> ))} 
      </div>

      <div className="hidden lg:block">
        <RightSide/>
      </div>

    </div>
  )
}