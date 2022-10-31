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
            company: 'FakeBlock',
            title: 'CEO',
            from: 'April 2019',
            to: 'Present',
            description: 'Founder and CEO of FakeBlock'
        },
    });

    const [experienceList, setExperienceList] = useRecoilState(experienceAtom);
    return (
        <div className="flex flex-col ml-2">  
            <p>{experienceList.company}</p>
            <p>{experienceList.title}</p>
            <p>{experienceList.from}</p>
            <p>{experienceList.to}</p>
            <p>{experienceList.description}</p>
        </div>
    )
    }
export default CVExperience