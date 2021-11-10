import React from 'react'

export const Random = ({ min, max }) => {
  return (
    <div>
      {`Random value between ${min} and ${max} => ${Math.floor(Math.random() * (max - min + 1) + min)}`}
    </div>
  )
}
