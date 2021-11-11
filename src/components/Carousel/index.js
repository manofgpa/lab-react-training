import React, { useState } from 'react'

export const Carousel = ({ imgs }) => {

  const [currentImage, setCurrentImage] = useState(0)

  const handleClick = (e) => {
    e.target.id === 'next' ? setCurrentImage(currentImage + 1) : setCurrentImage(currentImage - 1)
  }


  return (
    <div style={{ display: 'flex' }}>
      <div style={{ alignSelf: 'center', marginRight: '0.5rem' }}>
        <button disabled={currentImage === 0} onClick={handleClick}>Previous</button>
      </div>
      <div>
        <img src={imgs[currentImage]} alt="" />
      </div>
      <div style={{ alignSelf: 'center', marginLeft: '0.5rem' }}>
        <button disabled={currentImage === imgs.length - 1} id='next' onClick={handleClick}>Next</button>
      </div>
    </div>
  )
}
