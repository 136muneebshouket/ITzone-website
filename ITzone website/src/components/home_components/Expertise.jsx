import React from "react";

const Expertise = () => {
    const arr = [
        {
          t: "Full Stack Web Development",
          options: ['React.js','Next.js' ,'Node.js','Express.js'],
        },
        {
          t: "Mobile App Development",
          options: ['React native','Flutter' ,'Swift'],
        },
        {
          t: "Product, UX & UI Design",
          options: ['Research', 'Wireframe','User Interface','Prototyping','Figma'],
        },
        {
          t: "Cloud & DevOps",
          options: ['AWS','Docker','Kubernetes','Teraform'],
        },
      
      ];
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full">
              <div className="section_title">
                <h2 className="h2_blue">Expertise to ace your next project</h2>
                
              </div>
            </div>
          </div>

          {/*  <!-- section content --> */}
          <div className="section_content row flex justify-center">
            {arr.map((v) => {
              return (
                <>
                  <div className="w-full flex px-2 py-3 m-2 md:w-2/5 border border-slate-300 border-dashed rounded-lg">
                    <img
                      className="my-2 mx-5 w-14 h-14"
                      src="/assets/images/favicon.png"
                      alt=""
                    />
                    <div>
                      <h3 className="md_black_heading">{v.t}</h3>
                       <div className='row flex mt-1'>
                        {v.options.map((v)=>{
                            return <>
                            <span className='py-1 px-2 m-1 border border-slate-300 text-xs text-slate-500'>{v}</span>
                            </>
                        })}
                       </div>
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

export default Expertise;
