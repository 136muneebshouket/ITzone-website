
import React from 'react'

const Contact_link = ({position}) => {
  return (
   <>
   <div className={'bg-yellow cursor-pointer w-fit flex p-1 rounded-full items-center'+" "+position}>
    <h4 className='md_black_heading mx-4 mb-0'>
     Schedule a meeting
    </h4>
     <div className='flex rounded-full bg-white py-3 px-3 m-1 h-auto'>
     <i className="lni lni-arrow-right"></i>
     </div>
   </div>
   
   
   </>
  )
}

export default Contact_link
