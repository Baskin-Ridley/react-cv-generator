import React, {useState} from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import PersonalInfo from '../forms/PersonalInfo';
import CVEducation from '../cvPreview/CVEducation';
const RightSide = (props: {
  cvEducation: any; components: any[] 
}) => {

//personal info
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

      <div className="bg-green-200 h-40 flex px-5">
        <div>
          <h2 className="text-white mt-6 font-bold text-4xl">{personalInfo.firstName}</h2>
          <h3 className="text-white mt-6 font-bold text-3xl">{personalInfo.lastName}</h3> 
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-4 break-all px-5">
          <div>
            <h2 className="">Description</h2>
            <p >{personalInfo.description}</p>
            <h2>Education</h2>

          </div>          
        </div>
        <div className="bg-red-200 col-span-1 w-full break-words px-5">
          <h2>Personal Details</h2>
          <div>
            <b>City</b>
            <p>{personalInfo.city}</p>
          </div>
          <div className="">
            <b className="">Email</b>
            <p className="">{personalInfo.email}</p>
          </div>
          <div>
            <b>Phone</b>
            <p>{personalInfo.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide