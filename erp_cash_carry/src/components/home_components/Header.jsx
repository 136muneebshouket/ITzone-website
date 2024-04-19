import React from 'react'

const Header = () => {
  return (
   <>
     {/*====== HEADER PART START ======*/}

     <section class="header_area">
      
        {/* header navbar */}
        <div
          id="home"
          class="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center"
        >
          <div class="hero_shape shape_1">
            <img src="/assets/images/shape/shape-1.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_2">
            <img src="/assets/images/shape/shape-2.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_3">
            <img src="/assets/images/shape/shape-3.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_4">
            <img src="/assets/images/shape/shape-4.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_6">
            <img src="/assets/images/shape/shape-1.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_7">
            <img src="/assets/images/shape/shape-4.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_8">
            <img src="/assets/images/shape/shape-3.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_9">
            <img src="/assets/images/shape/shape-2.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_10">
            <img src="/assets/images/shape/shape-4.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_11">
            <img src="/assets/images/shape/shape-1.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="hero_shape shape_12">
            <img src="/assets/images/shape/shape-2.svg" alt="shape" />
          </div>
          {/* hero shape */}
          <div class="container">
            <div class="row">
              <div class="w-full lg:w-1/2">
                <div class="header_hero_content pt-150 lg:pt-0">
                  <h1 class="">
                    Creative Multipurpose{" "}
                    <span class="text-theme-color">Technolgies</span>
                  </h1>
                  <p class="mt-8 lg:mr-8">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                  <div class="hero_btn mt-10">
                    <a class="main-btn" href="#0">
                      Get Started
                    </a>
                  </div>
                </div>{" "}
                {/* header hero content */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
          <div class="header_shape hidden lg:block"></div>
          <div class="header_image flex items-center">
            <div class="image 2xl:pl-25">
              <img src="/assets/images/header-image.svg" alt="Header Image" />
            </div>
          </div>{" "}
          {/* header image */}
        </div>{" "}
        {/* header hero */}
      </section>

      {/*====== HEADER PART ENDS ======*/}
   
   </>
  )
}

export default Header
