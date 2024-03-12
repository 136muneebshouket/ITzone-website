'use client'

import React , {useState , useEffect , useContext } from 'react'
import Context from '@/configs/Context'

const page = () => {

    

  const [userval, setUserval] = useState(0);
   
  function change(params) {
      // setTimeout(() => {
      setUserval( userval + 1 )
    // }, 1000);
  }
   

  function check(params) {
    console.log('hello world')
  }
  // check()
  useEffect(()=>{

    // setTimeout(() => {
    //   setUserval( userval + 1 )
    //   // console.log('time out check')
    // }, 1000);
   
  //   const interval = setInterval(() => {
  //     setUserval(userval + 1);
  // }, 1000);

  //Clearing the interval
  // return () => clearInterval(interval);

  },[userval])

  // console.log('time out check')

  
  

  return (
    <div>
         <h1>THIS IS STATE {userval}</h1> 
        <button onClick={change}> change </button>
    </div>
  )
}

export default page
