import { render } from "@testing-library/react";
import React from "react";

// Code EyesOnMe Component Here
function EyesOnMe(){
  function focusPhrase(){ console.log("Good!")};
  function blurPhrase(){ console.log("Hey! Eyes on me!")};
  return <button onFocus={focusPhrase} onBlur={blurPhrase}> Eyes on me </button>
}
export default EyesOnMe;