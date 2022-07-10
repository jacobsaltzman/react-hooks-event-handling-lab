// Code Keypad Component Here
import React from "react"

function Keypad(){
  return <input type="password" onChange={e => console.log("Entering password...")}/>
}

export default Keypad