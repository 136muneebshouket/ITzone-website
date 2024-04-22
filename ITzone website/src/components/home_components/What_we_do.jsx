import React from "react";
import Image from "next/image";
const What_we_do = () => {
  const arr = [
    {
      t: "Develop An MVP",
      p: "Launch foolproof MVPs that stand the test of time.",
      img:'/lounch-icon.svg'
    },
    {
      t: "Expand Your Team",
      p: "Get the best returns on investment with our hi-tech industry experts.",
      img:'/expand-icon.svg'
    },
    {
      t: "Get CTO’s Advice",
      p: "Know what the market leaders have to say to grow your technical footprint.",
      img:'/advice-icon.svg'
    },
    {
      t: "Create A Design",
      p: "We live and breathe design thinking. Take advantage!",
      img:'/create-design-icon.svg'
    },
    {
      t: "Transform Your Enterprise",
      p: "Stop chasing the trends and start building your enterprise differentiator.",
      img:'/transform-icon.svg'
    },
  ];
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full">
              <div className="section_title">
                <h2 className="h2_blue">What Can We Do For You?</h2>
                <p className="p_under_heading">
                  Gain an unfair advantage over your competitors with our
                  goal-oriented approach, mandatory quality audits, and
                  transparent processes from start to end.{" "}
                </p>
              </div>
            </div>
          </div>

          {/*  <!-- section content --> */}
          <div className="section_content row flex justify-center">
            {arr.map((v) => {
              return (
                <>
                  <div className="flex my-7 mx-3 md:w-2/5 ">
                    <Image
                      className="my-2 mx-4 w-14 h-14"
                      width={100}
                      height={100}
                      src={`/assets/images/icons/${v.img}`}
                      alt=""
                    />
                    <div>
                      <h3 className="md_black_heading">{v.t}</h3>
                      <p>{v.p}</p>
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

export default What_we_do;
