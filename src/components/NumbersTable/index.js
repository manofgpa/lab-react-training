import React from 'react'

export const NumbersTable = ({ limit }) => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', width: '20%' }}>
        {new Array(limit).fill(0).map((num, i) => (
          <div style={{ width: '50px', height: '50px', color: 'black', border: '1px solid black', backgroundColor: i % 2 !== 0 ? 'red' : 'white' }} >
            {i + 1}
          </div>
        ))}
      </div>
    </>
  )
}
