import React from "react"

const Square = ({colorValue, hexValue, isTextDark}) => {
  return (
    <div className='Square' style={{
      backgroundColor: colorValue,
      color: isTextDark ? "black" : "#fff"
      }}>
      <p>{colorValue ? colorValue : "Enter Color"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

export default Square
