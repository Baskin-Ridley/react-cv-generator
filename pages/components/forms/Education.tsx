import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
const Education = (props: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {

  const educationAtom = atom({
    key: `educationAtom${props.id}`,
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
      {/* create a form with tailwindcss using the educationatom */}
      <form>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="school"
            type="text"
            placeholder="School"
            value={educationList.school}
            onChange={(e) => {
              setEducationList({
                ...educationList,
                school: e.target.value,
              })
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="degree"
            type="text"
            placeholder="Degree"
            value={educationList.degree}
            onChange={(e) => {
              setEducationList({
                ...educationList,
                degree: e.target.value,
              })
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fieldOfStudy"
            type="text"
            placeholder="Field of Study"
            value={educationList.fieldOfStudy}
            onChange={(e) => {
              setEducationList({
                ...educationList,
                fieldOfStudy: e.target.value,
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
            value={educationList.from}
            onChange={(e) => {
              setEducationList({
                ...educationList,
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
            value={educationList.to}
            onChange={(e) => {
              setEducationList({
                ...educationList,
                to: e.target.value,
              })
            }}
          />
        </div>
      </form>
      {/* create a delete button for education form */}
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setEducationList({
            school: '',
            degree: '',
            fieldOfStudy: '',
            from: '',
            to: ''
          })
        }}
      >
        Delete
      </button>
      
    </div>
  )
}

export default Education