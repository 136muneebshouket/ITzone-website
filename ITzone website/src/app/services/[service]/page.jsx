import React from "react";
import Service_header from "@/components/service_page_components/Service_header";
import Img_component from "@/components/service_page_components/Img_component";
import Benefits from "@/components/service_page_components/Benefits";
import SlickSlider from "@/components/services_components/SlickSlider";
import Acheivments from "@/components/service_page_components/Acheivments";
import Working_process from "@/components/service_page_components/Working_process";

const page = () => {
  const skills = [
    {
      heading: "Scoping & Estimation",
      content:
        "Conduct workshops to understand your idea and discuss strategy, tool bank, and design & development requirements.",
      img: "/slider_1.svg",
    },
    {
      heading: "Project Initiation",
      content:
        "Build wireframes & design drafts, lay first foundation of the mobile app in Sprint 0, & lock roadmap, requirements, & deadlines for upcoming sprints.",
      img: "/slider_2.svg",
    },
    {
      heading: "Iterative Development",
      content:
        "Test & finalize the wireframes, architecture & interactive UX-UI. After multiple sprints, coding & design iterations, the project is close to launch.",
      img: "/slider_3.svg",
    },
    {
      heading: "User Acceptance and QA Testing",
      content:
        "Before deployment, the app undergoes a rigorous round of user acceptance testing, to ensure an error-free mobile application.",
      img: "/slider_4.svg",
    },
  ];
  return (
    <>
      <Service_header />
      <div className="my-24">
      <Acheivments blue={true}/>
      </div>
      <div className="service_content w-11/12 md:w-4/5 mx-auto my-24">
        <div className="section_title mt-10">
          <h2 className="services_title text-left my-5 text-theme-color font-semibold text-xl md:text-4xl">
            Web Development Services for high performance
          </h2>
        </div>
        <Img_component />
        <div className="my-24">
          <h2 className="services_title text-left my-5 text-theme-color font-semibold text-xl md:text-4xl">
            Our Process
          </h2>
          <SlickSlider skills={skills} />
        </div>

        {/* <Benefits /> */}
      </div>
      {/* <Working_process /> */}
    </>
  );
};

export default page;
