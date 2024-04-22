'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";



const SlickSlider = () => {


  const skills = [
    {
      heading: 'Artificial Inteligence (AI)',
      content: 'We bring extensive expertise in predictive modeling, data mining, computer vision, and natural language processing. AI helps us streamline overall business workflows for you, reducing overall human effort.',
      img: '/work-1.jpg'
    },
    {
      heading: 'Artificial Inteligence (AI)',
      content: 'We bring extensive expertise in predictive modeling, data mining, computer vision, and natural language processing. AI helps us streamline overall business workflows for you, reducing overall human effort.',
      img: '/work-2.jpg'
    },
    {
      heading: 'Artificial Inteligence (AI)',
      content: 'We bring extensive expertise in predictive modeling, data mining, computer vision, and natural language processing. AI helps us streamline overall business workflows for you, reducing overall human effort.',
      img: '/work-3.jpg'
    },
    {
      heading: 'Artificial Inteligence (AI)',
      content: 'We bring extensive expertise in predictive modeling, data mining, computer vision, and natural language processing. AI helps us streamline overall business workflows for you, reducing overall human effort.',
      img: '/work-4.jpg'
    },
    {
      heading: 'Artificial Inteligence (AI)',
      content: 'We bring extensive expertise in predictive modeling, data mining, computer vision, and natural language processing. AI helps us streamline overall business workflows for you, reducing overall human effort.',
      img: '/work-5.jpg'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: true,
    waitForAnimate:0,
    autoplay:true,
    autoplaySpeed:6000,
    delay: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <div className="w-4/5 m-auto mb-14">
      <div className="mb-5">
      <h1 className="h2_blue">Explore Our Technological Competency</h1>
      </div>
      <Slider {...settings}>
        {skills.map((d) =>
          <>
            <div className="flex flex-md-row h-[300px] w-full items-center justify-center" key={d.heading}>
              <div className="px-10 w-1/2 ">
                <Image src={'/assets/images' + d.img} width={500} height={500} alt={d.heading} />
              </div>
              <div className="w-1/2">
                <h2 className="">{d.heading}</h2>
                <p>{d.content}</p>
              </div>
            </div>
          </>

        )}
      </Slider >

    </div>
  );
}

export default SlickSlider;