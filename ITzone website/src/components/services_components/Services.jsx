import ServiceCard from "./ServiceCard";
import SlickSlider from "./SlickSlider";
import TechWeUse from "./TechWeUse";

const services = [
  {
    heading: "Web Development",
    content:
      "Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.",
    link: "web-development",
  },
  {
    heading: "Enterprise Software Development Solutions",
    content:
      "With deeper expertise in modern technologies and a team dedicated to delivering foolproof results, we offer viable and cross-platform software solutions for your business that minimize market risks and maximize monetary results.",
    link: "enterprise-software-development",
  },
  {
    heading: "Software Product Design",
    content:
      "Jaw-dropping, navigable, and accessible interfaces await you! We highly believe design and code are only devices of expression. What sets our work apart is people who deliver an intuitive visual appeal giving your people what they need to see and experience.",
    link: "software-product-design",
  },
  {
    heading: "CTO As A Service",
    content:
      "Your digital journey can be challenging and unique but well-informed leadership and technical guidance can lead you to successful technology adoption. We are your trusted tech allies dedicated to providing and executing a sustainable roadmap per your business needs.",
    link: "cto-as-a-service",
  },
];

const Services = () => {
  const skills = [
    {
      heading: "Artificial Inteligence (AI)",
      content:
        "We bring extensive expertise in predictive modeling, data mining, computer vision, and natural language processing. AI helps us streamline overall business workflows for you, reducing overall human effort.",
      img: "/slider_1.svg",
    },
    {
      heading: "Robotic Process Automation (RPA)",
      content:
        "We help automate your operations processes using software robots that simulate human actions and interact with software and digital systems to save time and avoid manual operations.",
      img: "/slider_2.svg",
    },
    {
      heading: "Internet of Things (IoT)",
      content:
        "We create tailored IoT solutions catered to your unique business needs across industries. We focus on multi-device integration to ensure high-performing and responsive technology integration.",
      img: "/slider_3.svg",
    },
    {
      heading: "Augmented Reality/ Virtual Reality (AR/VR)",
      content:
        "We deliver niche-specific AR/VR solutions for immersive experiences via AR-powered events, training sessions, navigation, and 2D/3D projections for businesses and folks globally.",
      img: "/slider_4.svg",
    },
    {
      heading: "Machine Learning (ML)",
      content:
        "We leverage powerful cloud-based platforms to accelerate ML tools and perform predictive analysis, data pre-processing, model training and tuning, and orchestration.",
      img: "/slider_5.svg",
    },
  ];

  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full">
              <div className="section_title">
                <h2 className="h2_blue">
                  Explore Full Cycle Software Development Services:
                  <span className="h2_blue">From Zero To One.</span>
                </h2>
                <p className="p_under_heading"></p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 w-max m-auto lg:grid-cols-2 2xl:grid-cols-3 mb-10">
            {services.map((n) => (
              <ServiceCard
                key={n.link}
                heading={n.heading}
                content={n.content}
                link={n.link}
              />
            ))}
          </div>
        </div>
        {/* container */}
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full">
              <div className="section_title">
                <h2 className="h2_blue">
                  Explore Our Technological Competency
                </h2>
              </div>
            </div>
          </div>
          <SlickSlider skills={skills} />
        </div>
        {/* container */}
      </section>

      <TechWeUse />
    </>
  );
};

export default Services;
