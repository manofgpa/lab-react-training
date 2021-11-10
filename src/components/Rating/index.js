import React from 'react'

export const Rating = ({ children }) => {

  const stars = new Array(5).fill(0).map((star, i) => (
    i < Math.round(children) ? 1 : 0
  ))
  return (
    <div>
      {stars.map(star => (
        star ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>
      ))}
    </div>
  )
}
