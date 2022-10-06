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
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'name@email.com',
          phone: '07975777666',
          city: 'London',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec dolor eu augue faucibus laoreet. Vivamus at ex nec odio scelerisque sodales ac at neque. Aliquam nec porta erat. Aenean accumsan tempor nunc, et consectetur est malesuada in. Nullam vehicula ante finibus odio congue egestas. Duis mattis mauris ornare enim aliquam, a vulputate ligula consequat. Praesent blandit velit tortor, non porttitor neque ultricies ut. Aliquam vulputate, nunc eget maximus tempor, elit odio congue eros, a ornare lectus ligula quis tellus. Aenean pulvinar leo in est accumsan, non dapibus leo laoreet. Aliquam non ante vitae est dignissim dapibus. m'
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