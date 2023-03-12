import React from 'react'
import colorNames from "colornames"

const InputTx = ({colorValue, setColorValue, setHexValue, setIsTextDark, isTextDark }) => {
  return (
    <form className='inputText' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='colortet'>Color</label>
        <input
            autoFocus
            type ="text"
            placeholder ='Add Color Name'
            value = {colorValue}
            onChange ={(e) => { 
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
            />
        <button
            type='button'
            onClick={() => setIsTextDark(!isTextDark)}>Toggle Text Color</button>
    </form>
  )
}

export default InputTx;
