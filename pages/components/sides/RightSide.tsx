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
      <div className="bg-green-200 h-20">
        <div>
          <h2>{personalInfo.firstName}</h2>
          <h3>{personalInfo.lastName}</h3> 
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="bg-blue-200 col-span-4">
          <div>
            <h2>Description</h2>
            <p>{personalInfo.description}</p>
          </div>          
        </div>
        <div className="bg-red-200 col-span-1">
          <h2>Personal Details</h2>
          <div>
            <b>City</b>
            <p>{personalInfo.city}</p>
          </div>
          <div>
            <b>Email</b>
            <p>{personalInfo.email}</p>
          </div>
          <div>
            <b>Phone</b>
            <p>{personalInfo.phone}</p>
          </div>
        </div>
      </div>


      
      {props.components.map((component) => component)}
    </div>
  )
}

export default RightSide