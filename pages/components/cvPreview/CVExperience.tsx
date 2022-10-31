import React from 'react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const CVExperience = (props: { id: any; }) => {

    var id=props[`id`]
    //expirience
    const experienceAtom = atom({
        key: `experienceAtom${id}`,
        default: {
            company: '',
            title: '',
            from: '',
            to: '',
            description: ''
        },
    });

    const [experienceList, setExperienceList] = useRecoilState(experienceAtom);
    return (
        <div className="flex flex-col">  
            <p>{experienceList.company}</p>
            <p>{experienceList.title}</p>
            <p>{experienceList.from}</p>
            <p>{experienceList.to}</p>
            <p>{experienceList.description}</p>
        </div>
    )
    }
export default CVExperience