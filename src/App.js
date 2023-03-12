import React from "react";
import { useState } from "react";
import Square from "./Square";
import InputTx from "./InputTx";
function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const[isTextDark, setIsTextDark] = useState(true);
   return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isTextDark={isTextDark}
         />
      <InputTx 
        colorValue ={colorValue}
        setColorValue ={setColorValue}
        setHexValue = {setHexValue}
        isTextDark={isTextDark}
        setIsTextDark={setIsTextDark}
      />
    </div>
  );
}

export default App;
