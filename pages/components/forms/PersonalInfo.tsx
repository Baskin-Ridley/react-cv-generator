import React from 'react'

const PersonalInfo = () => {

  const [personalInfo, setPersonalInfo] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    description: '',
  })
  return (
    <div>
      <h1 className="font-bold">Personal Information</h1>
      <form className="grid grid-cols-1">
        <div>
          <input
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
        </div>
        <div>
          <input
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
        </div>        
        <div>
          <input
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
        </div>
        <div>
          <input
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
        </div>
        <div>
          <input
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
        </div>
        <div>
          <textarea
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
          </div>
      </form>
    </div>
  )
}

export default PersonalInfo