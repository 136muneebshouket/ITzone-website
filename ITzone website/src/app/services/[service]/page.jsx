import React from "react";
import Service_header from "@/components/service_page_components/Service_header";
import Img_component from "@/components/service_page_components/Img_component";
import Benefits from "@/components/service_page_components/Benefits";
import Working_process from "@/components/service_page_components/Working_process";

const page = () => {
  return (
    <>
      <Service_header />
      <div className="service_content w-11/12 md:w-4/5 mx-auto my-15">
        <div className="section_title mt-10">
          <h2 className="services_title text-left text-black font-semibold text-xl md:text-4xl">
            Service Description
          </h2>
          <p className="text-left mt-5">
            Gain an unfair advantage over your competitors with our
            goal-oriented approach, mandatory quality audits, and transparent
            processes from start to end.
          </p>
        </div>
        <Img_component />
        <Benefits />
      </div>
      <Working_process />
    </>
  );
};

export default page;
