import React from 'react'

export const IdCard = (props) => {
  const { lastName, firstName, img, country, isStudent } = props.data

  return (
    <div style={{ display: 'flex', width: '100vw', border: '1px solid', padding: '0.25rem', margin: '0.5rem' }}   >
      <div style={{ marginRight: '0.25rem' }}>
        <img src={img} alt={firstName + ' ' + lastName} width='150px' />
      </div>
      <div>
        <p><strong>First name: </strong>{firstName}</p>
        <p><strong>Last name: </strong>{lastName}</p>
        <p><strong>Country: </strong>{country}</p>
        <p><strong>Student: </strong>{isStudent ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}
