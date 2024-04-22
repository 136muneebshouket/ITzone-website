import React from "react";

const Benefits = () => {
  let keypoints = [
    {
      strong: "Expanded Market Reach",
      p: "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
    },
    {
      strong: "Expanded Market Reach",
      p: "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
    },
    {
      strong: "Expanded Market Reach",
      p: "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
    },
    {
      strong: "Expanded Market Reach",
      p: "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
    },
    {
      strong: "Expanded Market Reach",
      p: "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
    },
  ];
  return (
    <>
      <div className="section_title mt-10">
        <h2 className="services_title mb-5 text-left text-black font-semibold text-xl md:text-4xl">
          Benefits
        </h2>
        <ul>
          {keypoints?.map((v) => {
            return (
              <>
                <li className="my-5">
                  <p className="text-left ">
                    <strong>{v.strong}</strong>:{v.p}
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Benefits;
