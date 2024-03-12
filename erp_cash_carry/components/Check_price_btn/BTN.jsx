'use client'
import React from 'react'

const BTN = ({price}) => {
  return (
   <>
     <button onClick={()=>{alert(price)}}>check price</button>
   </>
  )
}

export default BTN
