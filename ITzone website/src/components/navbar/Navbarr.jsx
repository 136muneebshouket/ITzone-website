"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbarr = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="sticky z-20 top-0 w-full">
      <div className="w-full" >
        <nav>
          <div className="max-w-7xl mx-auto">
            <div className="flex mx-auto justify-between w-5/6 ">
              {/* Primary menu and logo */}
              <div className="flex items-center gap-16 my-6">
                {/* logo */}
                <div>
                  <a
                    href="/"
                    className="flex gap-1 font-bold text-gray-700 items-center "
                  >
                    {/* <PaperAirplaneIcon className="h-6 w-6 text-primary" /> */}
                    <span>ITZone.uk</span>
                  </a>
                </div>
                {/* primary */}
                <div className="hidden lg:flex gap-8 ">
                  <a href="#" className="">
                    Home
                  </a>
                  <a href="#">About</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
              {/* secondary */}
              <div className="flex gap-6">
                <div className="hidden xs:flex items-center gap-10">
                  <div className="hidden lg:flex items-center gap-2">
                    {/* <MoonIcon className="h-6 w-6" /> */}
                    {/* <SunIcon className="h-6 w-6" /> */}
                  </div>
                  <div>
                    <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                      Free Trial
                    </button>
                  </div>
                </div>
                {/* Mobile navigation toggle */}
                <div className="lg:hidden flex items-center">
                  <button className="border-0" onClick={() => setToggleMenu(!toggleMenu)}>
                  <i className="lni lni-menu text-xl font-normal"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* mobile navigation */}
          <div
            className={`fixed z-40 w-full  bg-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}
          >
            <div className="px-8">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
                <a href="#">
                  Features
                </a>
                <a href="#">Pricing</a>
                <a href="#">Download</a>
                <a href="#">Classic</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      </div>
      
    </>
  );
};

export default Navbarr;
