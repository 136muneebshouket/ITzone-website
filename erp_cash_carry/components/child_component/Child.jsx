'use client'
import React , {memo} from "react";

const Child = ({userval , setUserval , child_function}) => {

    console.log('check rendering of child')

  return (
    <>
      <div style={{ border: "1px solid", margin:'10px' }}>
        <h1>Child Component</h1>
        <p> {userval} </p>
        <button onClick={()=>{setUserval(userval - 1)}}> minus</button>
        <button onClick={()=>{child_function('hello from child')}}> Call function</button>
      </div>
    </>
  );
};

export default memo(Child);
