import React from 'react'

const PersonalInfo = () => {

  const [personalInfo, setPersonalInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  })
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
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
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              address: e.target.value,
            })
          }}
        />
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
      </form>

      
    </div>
  )
}

export default PersonalInfo