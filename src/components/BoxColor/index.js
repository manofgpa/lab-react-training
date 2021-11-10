import React from 'react'

export const BoxColor = ({ r, g, b }) => {
  function ColorToHex(color) {
    var hexadecimal = color.toString(16)
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal
  }

  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue)
  }


  return (
    <div style={{ height: '100px', border: '2px solid', backgroundColor: `rgb(${r},${g},${b})`, textAlign: 'center' }}>
      <p>{`rgb(${r},${g},${b})`}</p>
      <p>{ConvertRGBtoHex(r, g, b).toLocaleUpperCase()}</p>
    </div>
  )
}
