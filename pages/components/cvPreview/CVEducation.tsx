import React from 'react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const CVEducation = (props: { id: any; }) => {
    console.log(props[`id`])
    var id=props[`id`]
    console.log(id)

    //education
    const educationAtom = atom({
        key: `educationAtom${id}`,
        default: {
        school: '',
        degree: '',
        fieldOfStudy: '',
        from: '',
        to: ''
        },
    });
    
    
    const [educationList, setEducationList] = useRecoilState(educationAtom);
    return (
        <div>
            {educationList.school}
        </div>
    )
    }

export default CVEducation