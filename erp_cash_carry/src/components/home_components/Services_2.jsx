"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services_2 = () => {
  let data = [
    {
      img: "/assets/images/work-1.jpg",
      title: "Marketing",
    },
    {
      img: "/assets/images/work-2.jpg",
      title: "Creative Design",
    },
    {
      img: "/assets/images/work-3.jpg",
      title: "UI/UX",
    },
    {
      img: "/assets/images/work-4.jpg",
      title: "Analysis",
    },
  ];

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/*====== WORK PART START ======*/}

      <section id="work" className="work_area bg-gray pt-120 pb-120">
        <div className="container">
          <div className="row justify-center">
            <div className="w-ull lg:w-1/2">
              <div className="section_title text-center pb-6">
                <h5 className="sub_title">Our Services</h5>
                <h4 className="main_title">What we offers</h4>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
        <div className="container-fluid">
          <div className="work_wrapper relative">
            <div className="work_active">
              <Slider {...settings}>
                {data?.map((obj) => {
                  return (
                    <>
                      <div className="w-full lg:w-80">
                        
                        <div className="single_item mx-auto">
                          <div className="single_work mx-3">
                          <Link href={`/services/${obj.title}`}>
                            <div className="work_image">
                              <img
                                src={obj.img}
                                alt="work"
                                className="w-full"
                                // width={100}
                                // height={100}
                                // unoptimized={true}
                              />
                            </div>
                            </Link>
                            <div className="work_content">
                              <Link href={`/services/${obj.title}`} className="arrow">
                                <i className="lni lni-chevron-right"></i>
                              </Link>
                              <h4 className="work_title text-xl md:text-2xl">
                                <Link href={`/services/${obj.title}`}>
                                {obj.title}
                                </Link>
                               
                              </h4>
                            </div>
                          </div>
                        </div>{" "}
                       
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>

            {/* row */}
          </div>
        </div>{" "}
        {/* container */}
      </section>

      {/*====== WORK PART ENDS ======*/}
    </>
  );
};

export default Services_2;
