import React from "react";
import Contact_link from "../small_components/Contact_link";

const Service_header = () => {
  return (
    <>
      <section class="header_area">
        {/* header navbar */}
        <div
          id="home"
          class="header_hero h-auto relative z-10 overflow-hidden flex flex-col md:flex-row items-center mx-auto"
        >
          <div class="container order-last w-full my-10 md:w-2/5 text-center md:ml-20 md:order-1">
            <h1 className="lg_black_heading leading-10 text-left text-theme-color mb-6">
              Software Development & Consultancy For Entrepreneurs
            </h1>
            <p className="text-left">
              200+ Enterprises Have Already Garnered Great Financial Results And
              Market Outreach With Our Time-Tested Development Flow, Error-Free
              Code Quality, And On-Time Project Delivery.
            </p>

            <Contact_link
              position={"my-9"}
              text={"Schedule a meeting"}
            />
          </div>

          <div className= "w-full order-1 md:w-3/5 md:order-2 h-full">
            <img src="/assets/images/header-image.svg" alt="" />
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Service_header;
