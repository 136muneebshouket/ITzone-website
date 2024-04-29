import React from "react";
import Image from "next/image";

const Img_component = () => {
  let keypoints = [
    "Front-end Development",
    "Back-end Development",
    "Content Management System (CMS) Integration",
    "E-commerce Features",
    "Responsive Design",
  ];

  return (
    <div className="flex items-center flex-col md:flex-row">
      <div className="rounded-lg overflow-hidden h-full w-full md:w-6/12 mr-3">
        <Image width={100} height={100} className="h-full w-full object-cover" src={`/assets/images/contact.svg`} />
      </div>
      <div className="w-full md:w-6/12 mr-3">
        {keypoints?.map((v) => {
          return (
            <div key={v} className="border-bottom border-slate-500 p-5 flex items-center">
              <i className="lni lni-checkmark tick"></i>
              <h3 className="md_black_heading">{v}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Img_component;
