import React from "react";
import Contact_link from "../small_components/Contact_link";
const Header = () => {
  return (
    <>
      {/*====== HEADER PART START ======*/}

      <section class="header_area">
        {/* header navbar */}
        <div
          id="home"
          class="header_hero bg-[url('/assets/images/home-banner.png')] bg-center bg-no-repeat h-screen relative z-10 overflow-hidden flex items-center"
        >
          <div class="container w-11/12 md:w-4/5 text-center">
            <h1 className="mb-6">
              Software Development & Consultancy For Entrepreneurs
            </h1>
            <p className="text-white text-center p_under_heading">
              200+ Enterprises Have Already Garnered Great Financial Results And
              Market Outreach With Our Time-Tested Development Flow, Error-Free
              Code Quality, And On-Time Project Delivery.
            </p>

            <Contact_link
              position={"m-auto my-9"}
              text={"Schedule a meeting"}
            />
          </div>
        </div>
      </section>

      {/*====== HEADER PART ENDS ======*/}
    </>
  );
};

export default Header;
