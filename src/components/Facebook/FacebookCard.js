import { useState } from 'react'

export const FacebookCard = ({ profile: { img, firstName, lastName, country, isStudent } }) => {


  const [isDisplayingInfo, setIsDisplayingInfo] = useState(false)

  const showMoreInfo = () => {
    setIsDisplayingInfo(!isDisplayingInfo)
  }

  return (
    <div key={img} style={{ display: 'flex', width: '100vw', border: '1px solid', padding: '0.25rem', margin: '0.5rem' }}   >
      <div style={{ marginRight: '0.25rem' }}>
        <img onClick={(e) => showMoreInfo(e)} src={img} alt={firstName + ' ' + lastName} width='150px' />
      </div>
      <div style={{ display: isDisplayingInfo ? 'none' : 'inline' }}>
        Click the image to show more info!
      </div>
      <div style={{ display: isDisplayingInfo ? 'inline' : 'none' }}>
        <p><strong>First name: </strong>{firstName}</p>
        <p><strong>Last name: </strong>{lastName}</p>
        <p><strong>Country: </strong>{country}</p>
        <p><strong>Type: </strong>{isStudent ? 'Student' : 'Teacher'}</p>
      </div>
    </div>
  )
}
