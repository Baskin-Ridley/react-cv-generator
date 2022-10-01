import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import PersonalInfo from '../forms/PersonalInfo';

const RightSide = (props: { components: any[] }) => {

//userecoilstate to get the state of personalInfoAtom
const personalInfoAtom = atom({
  key: 'personalInfoAtom',
  default: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    description: ''
  },
});
const [personalInfo, setPersonalInfo] = useRecoilState(personalInfoAtom)
 

  return (
    <div>
      <h1>{personalInfo.firstName}</h1>
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