import React from 'react'

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
          <div className="row justify-center">
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon flex text-center justify-center items-center">
                 <h2 className='lg_black_heading text-black'>20</h2>
                 <i className="lni lni-plus red_icon"></i>
                </div>
                <div className="services_content mt-7">
                  <h3 className="services_title text-black font-semibold text-xl md:text-3xl">
                    Developers
                  </h3>
                 
                </div>
              </div>{" "}
              {/* single services */}
            </div>
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
              <div className="services_icon flex text-center justify-center items-center">
                 <h2 className='lg_black_heading text-black'>30</h2>
                 <i className="lni lni-plus red_icon"></i>
                </div>
                <div className="services_content mt-7">
                  <h3 className="services_title text-black font-semibold text-xl md:text-3xl">
                    Projects delivered
                  </h3>
                 
                </div>
              </div>{" "}
              {/* single services */}
            </div>
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
              <div className="services_icon flex text-center justify-center items-center">
                 <h2 className='lg_black_heading text-black'>90</h2>
                 <i className="lni lni-star-empty red_icon"></i>
                </div>
                <div className="services_content mt-7">
                  <h3 className="services_title text-black font-semibold text-xl md:text-3xl">
                    Ratings
                  </h3>
                 
                </div>
              </div>{" "}
              {/* single services */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>

      {/*====== SERVICES PART ENDS ======*/}

  
  </>
  )
}

export default About
