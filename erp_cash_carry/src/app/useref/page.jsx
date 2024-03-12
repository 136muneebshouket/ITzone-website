"use client";

import React, { useState, useEffect, useRef , useCallback } from "react";
import Child from "../../../components/child_component/Child";

const page = () => {
    const [userval, setUserval] = useState(0);
    const [number, setNumber] = useState(0);
  const userInput = useRef(null);

  function change() {
    // userInput.current.style.color = "red";
    //  console.log(userInput.current)
    // setUserval(userval + 1)
    setNumber(number + 1)
  }


  const child_function = useCallback((value) => {
    console.log(value)
  }, []);

  return (
    <>
      <div>
        <h1 ref={userInput}>THIS IS STATE {number}</h1>
        <button onClick={change}> change </button>
      </div>
      <Child userval={userval} setUserval={setUserval}  child_function={child_function}/>
    </>
  );
};

export default page;
