
import {createContext, useContext, useReducer, useState} from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const PersonalInfo = () => {

//create atom for personal info

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

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    description: '',
  }


  const reducer = (state: any, action: { type: any; value: any }) => {
    switch (action.type) {
      case 'firstName':
        return {...state, firstName: action.value}
      case 'lastName':
        return {...state, lastName: action.value}
      case 'email':
        return {...state, email: action.value}
      case 'phone':
        return {...state, phone: action.value}
      case 'city':
        return {...state, city: action.value}
      case 'description':
        return {...state, description: action.value}
      default:
        return state
    }
  }

  const [personalInfo2, dispatch] = useReducer(reducer, initialState)

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
          id="lastName"
          type="text"
          placeholder="Last Name"
          onChange={(e) => dispatch({type: 'lastName', value: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
          onChange={(e) => dispatch({type: 'email', value: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="Phone"
          onChange={(e) => dispatch({type: 'phone', value: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="City"
          onChange={(e) => dispatch({type: 'city', value: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Description"
          onChange={(e) => dispatch({type: 'description', value: e.target.value})}
        />     
      </form>
    </div>
  )
}

export default PersonalInfo

