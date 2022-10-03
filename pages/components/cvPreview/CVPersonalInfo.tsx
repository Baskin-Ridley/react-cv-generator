import React, {useState} from 'react'
import {
RecoilRoot,
atom,
selector,
useRecoilState,
useRecoilValue,
} from 'recoil';

const CVPersonalInfo = () => {
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
        <p>
            {personalInfo.firstName}
        </p>
        <p>
            {personalInfo.lastName}
        </p>
        <p>
            {personalInfo.email}
        </p>
        <p>
            {personalInfo.phone}
        </p>
        <p>
            {personalInfo.city}
        </p>
        <p>
            {personalInfo.description}
        </p>
        
    </div>
  )
}

export default CVPersonalInfo