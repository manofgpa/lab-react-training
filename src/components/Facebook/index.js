import React, { useState } from 'react'
import data from '../../data/berlin.json'
import { FacebookCard } from './FacebookCard'

export const Facebook = () => {

  const [profiles, setProfiles] = useState(data)
  const [currentCountry, setCurrentCountry] = useState('All')

  const countries = [...new Set(data.map(profile => (
    profile.country
  )))]

  const handleClick = (e) => {
    setCurrentCountry(e.target.id)
    return e.target.id === 'All'
      ? setProfiles(data)
      : setProfiles(data.filter(profile => profile.country === e.target.id))
  }
  const handleChange = (e) => {
    setCurrentCountry('')
    setProfiles(data.filter(profile => profile.firstName.toLowerCase().includes(e.target.value) || profile.lastName.toLowerCase().includes(e.target.value)))
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <input type="text" style={{ padding: '5px', backgroundColor: '#ccc', border: '1px solid' }} onChange={(e) => handleChange(e)} placeholder="Search..." />
      </div>
      <div>
        <button id="All" style={{ backgroundColor: currentCountry === 'All' ? 'blue' : 'white', margin: '0.15rem' }} onClick={(e) => handleClick(e)}>All</button>
        {countries.map(country => (
          <button id={country} style={{ backgroundColor: currentCountry === country ? 'blue' : 'white', margin: '0.15rem' }} onClick={(e) => handleClick(e)}>{country}</button>
        ))}
      </div>
      {profiles.map(profile => (
        <FacebookCard profile={profile} />
      ))}
    </div>
  )
}
