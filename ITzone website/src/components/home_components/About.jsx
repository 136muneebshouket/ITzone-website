import React from 'react'
import Acheivments from '../service_page_components/Acheivments'

const About = () => {
  return (
  <>
   {/*====== SERVICES PART START ======*/}

   <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full">
              <div className="section_title">
                <h2 className="h2_blue">Achievements Through The Years...</h2>
                {/* <h4 className="md_black_heading">Work Process</h4> */}
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}

          {/* row */}
          <Acheivments/>
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>

      {/*====== SERVICES PART ENDS ======*/}

  
  </>
  )
}

export default About
