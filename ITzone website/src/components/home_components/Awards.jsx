import React from "react";
import Image from "next/image";
const Awards = () => {
  const arr = [
    {
      img: '/design_rush_2f85000137',
    },
    {
      img: '/good_firms_e536871f2d',
    },
    {
      img: '/top_developers_8a49299817',
    },
    {
      img: '/top_firms_ea1b6fb0b3',
    },

  ];
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full">
              <div className="section_title">
                <h2 className="h2_blue">Awards & Partners</h2>

              </div>
            </div>
          </div>

          {/*  <!-- section content --> */}
          <div className="section_content row flex justify-center">
            {arr.map((v) => {
              return (
                <div key={v.img} className="flex justify-center m-2 w-2/5 lg:w-1/4">
                  <Image
                    className="my-2 mx-4 w-24 h-24"
                    width={100}
                    height={100}
                    unOptimized={true}
                    src={`/assets/images/awards_imgs${v.img}.svg`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* container */}
      </section>
    </>
  );
};

export default Awards;
