import React from "react";

const Difference = () => {
  const arr = [
    {
      t1: "Inability to find top talent",
      img1: "/assets/images/favicon.png",
      t2: "100+ experts ready to fill possible gaps",
      img2: "/assets/images/favicon.png",
    },
    {
      t1: "Slow delivery and time-to-market",
      img1: "/assets/images/favicon.png",
      t2: "5x your time-to-market with our mission-critical services",
      img2: "/assets/images/favicon.png",
    },
    {
      t1: "Unpredictability about making investments",
      img1: "/assets/images/favicon.png",
      t2: "No more spending on unproven ideas",
      img2: "/assets/images/favicon.png",
    },
    {
      t1: "Is your idea risk-free",
      img1: "/assets/images/favicon.png",
      t2: "Build minimal to zero-risk solutions",
      img2: "/assets/images/favicon.png",
    },
    {
      t1: "Tired of slow development and delivery",
      img1: "/assets/images/favicon.png",
      t2: "Readily identify blockers for a quick launch",
      img2: "/assets/images/favicon.png",
    },
    {
      t1: "Honest feedback feels like a dream",
      img1: "/assets/images/favicon.png",
      t2: "Get market-friendly feedback to set your next move",
      img2: "/assets/images/favicon.png",
    },
  ];
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full">
              <div className="section_title">
                <h2 className="h2_blue">What Difference Is ITzone Making?</h2>
                <p className="p_under_heading">
                  We always present problems with tangible solutions.
                </p>
              </div>
            </div>
          </div>

          {/*  <!-- section content --> */}
          <div className="section_content">
            <div className="flex justify-around mb-10">
              <h3 className="services_title text-red-500 font-semibold text-xl md:text-3xl">
                Your Challenges
              </h3>
              <h3 className="services_title text-black font-semibold text-xl md:text-3xl">
                We solve them
              </h3>
            </div>

            {arr.map((v) => {
              return (
                <>
                  <div className="flex justify-around items-center m-3 p-2">
                    <div className="flex flex-col justify-center items-center w-full">
                      <img
                        className="m-2"
                        src={v.img1}
                        alt=""
                      />
                      <p className="text-center text-sm">
                        {v.t1}
                      </p>
                    </div>
                    <div className='gradient-arrow'>
                      <i className="lni lni-arrow-right"></i>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                      <img
                        className="m-2"
                        src={v.img2}
                        alt=""
                      />
                      <p className="text-center text-sm">
                        {v.t2}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* container */}
      </section>
    </>
  );
};

export default Difference;
