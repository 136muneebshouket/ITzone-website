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
      img: '/slider_1.svg'
    },
    {
      heading: 'Robotic Process Automation (RPA)',
      content: 'We help automate your operations processes using software robots that simulate human actions and interact with software and digital systems to save time and avoid manual operations.',
      img: '/slider_2.svg'
    },
    {
      heading: 'Internet of Things (IoT)',
      content: 'We create tailored IoT solutions catered to your unique business needs across industries. We focus on multi-device integration to ensure high-performing and responsive technology integration.',
      img: '/slider_3.svg'
    },
    {
      heading: 'Augmented Reality/ Virtual Reality (AR/VR)',
      content: 'We deliver niche-specific AR/VR solutions for immersive experiences via AR-powered events, training sessions, navigation, and 2D/3D projections for businesses and folks globally.',
      img: '/slider_4.svg'
    },
    {
      heading: 'Machine Learning (ML)',
      content: 'We leverage powerful cloud-based platforms to accelerate ML tools and perform predictive analysis, data pre-processing, model training and tuning, and orchestration.',
      img: '/slider_5.svg'
    }
  ]

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
    <section className="section" id="about">
      <div className="container">
        <div className="row justify-center">
          <div className="w-full">
            <div className="section_title">
              <h2 className="h2_blue">Explore Our Technological Competency</h2>

            </div>
          </div>
        </div>
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
                    <p>{d.content}</p>
                  </div>
                </div>
              </>

            )}
          </Slider >
        </div>


      </div>
      {/* container */}
    </section>

  );
}

export default SlickSlider;