import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const Experience = (props: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    //create an experience atom
    const experienceAtom = atom({
        key: `experienceAtom${props.id}`,
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
    <div>
      {props.id}
      <form>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            placeholder="Company"
            value={experienceList.company}
            onChange={(e) => {
              setExperienceList({
                ...experienceList,
                company: e.target.value,
              })
            }}
          />
        </div>
          <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            value={experienceList.title}
            onChange={(e) => {
              setExperienceList({
                ...experienceList,
                title: e.target.value,
              })
            }}
          />
        </div>
          <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="from"
            type="text"
            placeholder="From"
            value={experienceList.from}
            onChange={(e) => {
              setExperienceList({
                ...experienceList,
                from: e.target.value,
              })
            }}
          />
        </div>
          <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            placeholder="To"
            value={experienceList.to}
            onChange={(e) => {
              setExperienceList({
                ...experienceList,
                to: e.target.value,
              })
            }}
          />
        </div>
          <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            value={experienceList.description}
            onChange={(e) => {
              setExperienceList({
                ...experienceList,
                description: e.target.value,
              })
            }}
          />
        </div>
      </form>
    </div>
  );
}



export default Experience