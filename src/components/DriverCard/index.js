import React from 'react'
import { Rating } from '../Rating'

export const DriverCard = (props) => {

  const { name, rating, img, car: { model, licensePlate } } = props

  return (
    <div style={{ backgroundColor: '#455EB5', margin: '0.25rem', borderRadius: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
        <img src={img} alt={name} style={{ alignSelf: 'center', verticalAlign: 'middle', width: '100px', height: '100px', borderRadius: '50%' }} />
        <div style={{ width: '250px', marginLeft: '0.5rem' }}>
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <p>{model} - {licensePlate}</p>
        </div>
      </div>
    </div>
  )
}
