import React from 'react'

export const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

  return (
    <div style={{ height: '120px', width: '220px', padding: '0.75rem', margin: '0.75rem', borderRadius: '5px', backgroundColor: `${bgColor}`, color: { color } }}>
      <strong>•••• •••• •••• {number.slice(12)}</strong>
      <div style={{ display: 'flex' }}>
        <p>Expires {expirationMonth.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false
        })}, {expirationYear}</p>
        <p style={{ marginLeft: '10px' }}>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  )
}
