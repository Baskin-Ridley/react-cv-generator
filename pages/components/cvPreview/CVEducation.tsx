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
        school: 'University',
        degree: 'Degree',
        fieldOfStudy: 'Course Name',
        from: 'from',
        to: 'to'
        },
    });

    const [educationList, setEducationList] = useRecoilState(educationAtom);
    return (
        <div className="flex flex-col">
            <p>{educationList.school}</p>
            <p>{educationList.degree}</p>
            <p>{educationList.fieldOfStudy}</p>
            <p>{educationList.from}</p>
            <p>{educationList.to}</p>
        </div>
    )
    }

export default CVEducation