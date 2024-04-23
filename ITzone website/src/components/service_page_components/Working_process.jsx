import React from "react";

const Working_process = () => {
  let arr = [
    {
      num: "01",
      t: "Analysis and Planning",
      p: "The process begins by thoroughly understanding the client's objectives.",
    },
    {
      num: "02",
      t: "Current State Evaluation",
      p: "Assess the client's existing IT infrastructure, systems, and processes.",
    },
    {
      num: "03",
      t: "Implement Execution",
      p: "Execute the project plan, which may involve deploying new software, hardware, or IT processes.",
    },
    {
      num: "04",
      t: "Analysis and Planning",
      p: "Assess the results of the implemented solutions against the predefined goals.",
    },
  ];

  return (
    <>
      <section className="section mb-20 bg-darkblue-color bg-[url('/assets/images/box.svg')]">
        <div className="flex flex-col w-11/12 mx-auto items-center md:flex-row md:w-4/5 ">
          <div className="w-full mb-10 md:w-4/12">
            <h2 style={{ textAlign: "left" }} className="h2_white text-left">
              Working process
            </h2>
            <p className="md_white_heading mt-5">
              Our IT consulting process is a systematic journey comprising four
              stages: Assessment and Analysis, Planning, Implementation and
              Execution, and Monitoring and Optimization.
            </p>
          </div>
          <div className=" w-full md:w-9/12 flex flex-wrap">
            {arr?.map((obj) => {
              return (
                <>
                  <div
                    style={{ width: "320px" }}
                    className="rounded-full p-10 m-5 border-white border"
                  >
                    <h1 className="">{obj.num}</h1>
                    <h2 className="h2_white">{obj.t}</h2>
                    <p className="text-center mt-5 text-white">
                      {obj.p}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Working_process;
