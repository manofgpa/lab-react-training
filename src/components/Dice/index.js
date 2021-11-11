import React, { useState } from 'react'

export const Dice = () => {

  const [dice, setDice] = useState('img/dice/dice0.png')

  const handleClick = () => {
    setDice('img/dice/dice0.png')
    setTimeout(() => {
      setDice(`img/dice/dice${Math.floor(Math.random() * 6 + 1)}.png`)
    }, 1000)
  }

  return (
    <div>
      <img src={dice} alt="Dice image" width="200px" onClick={handleClick} />
    </div>
  )
}
