import React, { useState } from 'react'


export const ClickablePicture = ({ img, imgClicked }) => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div>
      <img src={isClicked ? imgClicked : img} alt={img} onClick={handleClick} width='200px' />
    </div>
  )
}
