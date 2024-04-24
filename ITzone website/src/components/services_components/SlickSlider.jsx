'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";



const SlickSlider = ({skills}) => {


  

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: true,
    waitForAnimate: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    delay: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
   
        <div className="lg:section_content mt-10">
          <Slider {...settings}>
            {skills.map((d) =>
              <>
                <div className="flex flex-col lg:flex-row lg:h-[300px] w-full items-center justify-center" key={d.heading}>
                  <div className="px-10 w-3/4 ">
                    <Image src={'/assets/images/slider_imgs' + d.img} width={500} height={500} alt={d.heading} />
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-black text-2xl">{d.heading}</h2>
                    <p className="mt-3">{d.content}</p>
                  </div>
                </div>
              </>

            )}
          </Slider >
        </div>


     

  );
}

export default SlickSlider;