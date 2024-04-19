'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {

  var settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    // autoplaySpeed: 2000,
    // cssEase: "ease",
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
  <>
      {/*====== TEAM PART START ======*/}

      <section id="team" class="team_area bg-gray pt-120 pb-120">
        <div class="container">
          <div class="row justify-center">
            <div class="w-full lg:w-1/2">
              <div class="section_title text-center pb-6">
                <h5 class="sub_title">Team</h5>
                <h4 class="main_title">Meet Our Team Members</h4>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div class="team-wrapper relative">
            <div class="team_active">
            <Slider {...settings}>
              <div class="w-full lg:w-4/12">
                <div class="single_team_item mx-auto">
                  <div class="single_team mx-3">
                    <div class="team_image relative">
                      <img
                        src="/assets/images/team-1.jpg"
                        alt="team"
                        class="w-full"
                      />
                      <ul class="social absolute top-4 right-8">
                        <li>
                          <a href="#">
                            <i class="lni lni-facebook-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-twitter-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-linkedin-original"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="team_content py-5 px-8 relative">
                      <h4 class="team_name text-xl md:text-2xl">
                        <a href="#" class="text-black group-hover:text-white">
                          Chris Dave
                        </a>
                      </h4>
                      <p class="mt-2 transition-all duration-300 group-hover:text-white">
                        Founder and CEO
                      </p>
                    </div>
                  </div>{" "}
                  {/* single team */}
                </div>
              </div>
              <div class="w-full lg:w-4/12">
                <div class="single_team_item mx-auto">
                  <div class="single_team mx-3">
                    <div class="team_image relative">
                      <img
                        src="/assets/images/team-3.jpg"
                        alt="team"
                        class="w-full"
                      />
                      <ul class="social absolute top-4 right-8">
                        <li>
                          <a href="#">
                            <i class="lni lni-facebook-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-twitter-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-linkedin-original"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="team_content py-5 px-8 relative">
                      <h4 class="team_name text-xl md:text-2xl">
                        <a href="#" class="text-black group-hover:text-white">
                          Sarah Doe
                        </a>
                      </h4>
                      <p class="mt-2 transition-all duration-300 group-hover:text-white">
                        UI Designer
                      </p>
                    </div>
                  </div>{" "}
                  {/* single team */}
                </div>
              </div>
              <div class="w-full lg:w-4/12">
                <div class="single_team_item mx-auto">
                  <div class="single_team mx-3">
                    <div class="team_image relative">
                      <img
                        src="/assets/images/team-5.jpg"
                        alt="team"
                        class="w-full"
                      />
                      <ul class="social absolute top-4 right-8">
                        <li>
                          <a href="#">
                            <i class="lni lni-facebook-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-twitter-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-linkedin-original"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="team_content py-5 px-8 relative">
                      <h4 class="team_name text-xl md:text-2xl">
                        <a href="#" class="text-black group-hover:text-white">
                          Rob Hope
                        </a>
                      </h4>
                      <p class="mt-2 transition-all duration-300 group-hover:text-white">
                        Dr. Software Engineer
                      </p>
                    </div>
                  </div>{" "}
                  {/* single team */}
                </div>
              </div>
              <div class="w-full lg:w-4/12">
                <div class="single_team_item mx-auto">
                  <div class="single_team mx-3">
                    <div class="team_image relative">
                      <img
                        src="/assets/images/team-2.jpg"
                        alt="team"
                        class="w-full"
                      />
                      <ul class="social absolute top-4 right-8">
                        <li>
                          <a href="#">
                            <i class="lni lni-facebook-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-twitter-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lni lni-linkedin-original"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="team_content py-5 px-8 relative">
                      <h4 class="team_name text-xl md:text-2xl">
                        <a href="#" class="text-black group-hover:text-white">
                          Micheal Jordan
                        </a>
                      </h4>
                      <p class="mt-2 transition-all duration-300 group-hover:text-white">
                        Business Development Manager
                      </p>
                    </div>
                  </div>{" "}
                  {/* single team */}
                </div>
              </div>
              </Slider>


            </div>{" "}
            {/* row */}
          </div>
        </div>{" "}
        {/* container */}
      </section>

      {/*====== TEAM PART ENDS ======*/}
  
  </>
  )
}

export default Team