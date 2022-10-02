import { useState } from "react"
import LeftSide from "./components/sides/LeftSide"
import RightSide from "./components/sides/RightSide"
import Unique from "./components/experimental/Unique"
import { AddButton } from "./components/buttons/AddButton"
import { nanoid } from 'nanoid'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export default function Home() {

  const [components, setComponents] = useState([<Unique id = {nanoid()}/>]); 
  
  function addComponent() {   
    setComponents([...components, <Unique id = {nanoid()}/>]) 
  } 


  return (

    <RecoilRoot>
      <div className="grid grid-cols-2">
        <div>
          <LeftSide/>
          {components.map((component) => component)}
          <AddButton onClick={addComponent} text="Add ID"/> 
        </div>

        <div className="">
          <RightSide components = {components}/>
        </div>
      </div>
    </RecoilRoot>
  )
}