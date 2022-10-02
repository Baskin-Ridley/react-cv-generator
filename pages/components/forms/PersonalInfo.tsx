
import {createContext, useContext, useReducer, useState} from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const PersonalInfo = () => {

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
      <h1 className="font-bold">Personal Information</h1>
      <form className="grid grid-cols-1">
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                firstName: e.target.value,
              })
            }}
          />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="Last Name"
          name="Last Name"
          placeholder="Last Name"
          value={personalInfo.lastName}
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              lastName: e.target.value,
            })
          }}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="email"
            name="email"
            placeholder='Email'
            value={personalInfo.email}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                email: e.target.value,
              })
            }}          
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="phone"
          name="phone"
          placeholder='Phone Number'
          value={personalInfo.phone}
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              phone: e.target.value,
            })
          }}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="city"
          name="city"
          placeholder='City'
          value={personalInfo.city}
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              city: e.target.value,
            })
          }}
        />
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          placeholder='Description'
          value={personalInfo.description}
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              description: e.target.value,
            })
          }}
        />     
      </form>
    </div>
  )
}

export default PersonalInfo

