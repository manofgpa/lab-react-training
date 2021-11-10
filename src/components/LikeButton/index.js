import React from 'react'
import { useState } from 'react'

export const LikeButton = () => {
  const [firstButtonLikes, setFirstButtonLikes] = useState({ count: 0, bgColor: '' })
  const [secondButtonLikes, setSecondButtonLikes] = useState({ count: 0, bgColor: '' })

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

  const randomColor = () => {
    return colors[Math.floor(Math.random() * (colors.length + 1))]
  }


  const handleClick = (e) => {
    e.target.id === 'first_button'
      ? setFirstButtonLikes({ count: firstButtonLikes.count + 1, bgColor: randomColor() })
      : setSecondButtonLikes({ count: secondButtonLikes.count + 1, bgColor: randomColor() })
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)} id="first_button" style={{ backgroundColor: firstButtonLikes.bgColor }}>{firstButtonLikes.count} {firstButtonLikes.count === 1 ? `Like` : `Likes`}</button>
      <button onClick={(e) => handleClick(e)} style={{ backgroundColor: secondButtonLikes.bgColor }}>{secondButtonLikes.count} {secondButtonLikes.count === 1 ? `Like` : `Likes`}</button>
    </div >
  )
}
