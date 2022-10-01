import React from 'react'

const PersonalInfo = () => {

  const [personalInfo, setPersonalInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  })
  return (
    <div>
      <h1 className="font-bold">Personal Information</h1>
      <form className="grid lg:grid-cols-2 md:grid-cols-1">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            value={personalInfo.name}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                name: e.target.value,
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
      </form>
    </div>
  )
}

export default PersonalInfo