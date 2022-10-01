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
      <h1>Personal Information</h1>
      <form className="grid lg:grid-cols-2 md:grid-cols-1">
        <div>
          <label className="" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
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
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
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
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
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