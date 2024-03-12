'use client'

import React ,{useContext} from 'react'
import Context from '@/configs/Context'

const page = () => {
  
  const {message , setMessage } = useContext(Context)

  return (
    <div>
      Signup
      <button onClick={()=>{setMessage('my context')}}>Change context</button>
    </div>
  )
}

export default page
