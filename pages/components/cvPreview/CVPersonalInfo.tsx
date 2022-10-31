import React, {useState} from 'react'
import {
RecoilRoot,
atom,
selector,
useRecoilState,
useRecoilValue,
} from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons'



const CVPersonalInfo = () => {
  
    const personalInfoAtom = atom({
        key: 'personalInfoAtom',
        default: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'name@email.com',
          phone: '07975777666',
          city: 'London',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec dolor eu augue faucibus laoreet. Vivamus at ex nec odio scelerisque sodales ac at neque. Aliquam nec porta erat. Aenean accumsan tempor nunc, et consectetur est malesuada in. Nullam vehicula ante finibus odio congue egestas. Duis mattis mauris ornare '
        },
      });
    const [personalInfo, setPersonalInfo] = useRecoilState(personalInfoAtom)
    
  return (
    <div>
      <div className="flex flex-row place-content-around">
        <div>
            <h2 className="text-5xl font-normal leading-normal mt- mb-2 text-blue-500">
                {personalInfo.firstName}
            </h2>
            <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-500">
                {personalInfo.lastName}
            </h3>
        </div>
        <div className="flex flex-col ml-4 mt-7">
            <h3 className="text-xl font-normal leading-normal mt-0 mb-0">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
              {personalInfo.email}
            </h3>
            <h3 className="text-xl font-normal leading-normal mt-0 mb-0">
              <FontAwesomeIcon icon={faPhone} className="mr-2"/>
              {personalInfo.phone}
            </h3>
            <h3 className="text-xl font-normal leading-normal mt-0 mb-">
              <FontAwesomeIcon icon={faHouse} className="mr-2"/>
              {personalInfo.city}
            </h3>
        </div>
      </div>
      <p className='ml-2 mb-2 '>
        <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-500">About Me</h3>
        {personalInfo.description}
      </p>
    </div>
  )
}

export default CVPersonalInfo