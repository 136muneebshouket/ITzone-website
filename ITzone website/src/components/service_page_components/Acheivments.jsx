
"use client";
import React, { useEffect , useState } from "react";

const Acheivments = ({ blue }) => {

    const [num , setnum] = useState({
      num1:0,
      num2:0,
      num3:0
    })

    useEffect(()=>{
      const interval = setInterval(() => {
        setnum(()=>({...num , num1: (num.num1 < 20 ? num.num1+1 :num.num1)  , num2: (num.num2 < 30 ? num.num2+1 :num.num2) , num3: (num.num3 < 90 ? num.num3+1 :num.num3) }));
    }, 100);

    //Clearing the interval
    return () => clearInterval(interval);
    },[num])


  return (
    <>
      <div className="row justify-center">
        <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
          <div className="single_services text-center mt-8 mx-3">
            <div className="services_icon flex text-center justify-center items-center">
              <h2 className="lg_black_heading text-black">{num.num1}</h2>
              <i className="lni lni-plus red_icon"></i>
            </div>
            <div className="services_content mt-7">
              <h3 className="text-black ">
                Developers
              </h3>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
        <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
          <div className="single_services text-center mt-8 mx-3">
            <div className="services_icon flex text-center justify-center items-center">
              <h2 className="lg_black_heading text-black">{num.num2}</h2>
              <i className="lni lni-plus red_icon"></i>
            </div>
            <div className="services_content mt-7">
              <h3 className="text-black ">
                Projects delivered
              </h3>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
        <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
          <div className="single_services text-center mt-8 mx-3">
            <div className="services_icon flex text-center justify-center items-center">
              <h2 className="lg_black_heading text-black">{num.num3}</h2>
              <i className="lni lni-star-empty red_icon"></i>
            </div>
            <div className="services_content mt-7">
              <h3 className="text-black ">
                Ratings
              </h3>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
      </div>
    </>
  );
};

export default Acheivments;
