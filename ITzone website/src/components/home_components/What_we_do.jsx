import React from "react";

const What_we_do = () => {
  const arr = [
    {
      t: "Develop An MVP",
      p: "Launch foolproof MVPs that stand the test of time.",
    },
    {
      t: "Develop An MVP",
      p: "Launch foolproof MVPs that stand the test of time.",
    },
    {
      t: "Develop An MVP",
      p: "Launch foolproof MVPs that stand the test of time.",
    },
    {
      t: "Develop An MVP",
      p: "Launch foolproof MVPs that stand the test of time.",
    },
    {
      t: "Develop An MVP",
      p: "Launch foolproof MVPs that stand the test of time.",
    },
    {
      t: "Develop An MVP",
      p: "Launch foolproof MVPs that stand the test of time.",
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
                  <div className="flex m-2 md:w-2/5 xl:w-1/4">
                    <img
                      className="my-2 mx-4 w-14 h-14"
                      src="/assets/images/favicon.png"
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
