import { useState } from 'react'


export const LikeButton = () => {

  const [firstButtonLikes, setFirstButtonLikes] = useState({
    count: 0,
    bgColor: 'white'
  })
  const [secondButtonLikes, setSecondButtonLikes] = useState({
    count: 0,
    bgColor: 'white'
  })

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

  const randomColor = () => {
    return colors[Math.floor(Math.random() * (colors.length + 1))]
  }

  const counter = (evento) => {
    if (evento.target.id === 'firstButton') {
      setFirstButtonLikes({ count: firstButtonLikes.count + 1, bgColor: randomColor() })
    } else {
      setSecondButtonLikes({ count: secondButtonLikes.count + 1, bgColor: randomColor() })
    }
  }

  return (
    <>
      <button onClick={(evento) => counter(evento)} id="firstButton" style={{ backgroundColor: firstButtonLikes.bgColor }}>{firstButtonLikes.count} {firstButtonLikes.count === 1 ? 'Like' : 'Likes'}</button>
      <button onClick={(evento) => counter(evento)} id="secondButton" style={{ backgroundColor: secondButtonLikes.bgColor }} >{secondButtonLikes.count} {secondButtonLikes.count === 1 ? 'Like' : 'Likes'}</button>
    </>
  )
}