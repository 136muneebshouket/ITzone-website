import ServiceCard from "./ServiceCard";
import SlickSlider from "./SlickSlider";
import TechWeUse from "./TechWeUse";

const services = [
    {
        heading: 'Web Development',
        content: 'Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.',
        link: 'web-development'
    },
    {
        heading: 'Enterprise Software Development Solutions',
        content: 'With deeper expertise in modern technologies and a team dedicated to delivering foolproof results, we offer viable and cross-platform software solutions for your business that minimize market risks and maximize monetary results.',
        link: 'enterprise-software-development'
    },
    {
        heading: 'Software Product Design',
        content: 'Jaw-dropping, navigable, and accessible interfaces await you! We highly believe design and code are only devices of expression. What sets our work apart is people who deliver an intuitive visual appeal giving your people what they need to see and experience.',
        link: 'software-product-design'
    },
    {
        heading: 'CTO As A Service',
        content: 'Your digital journey can be challenging and unique but well-informed leadership and technical guidance can lead you to successful technology adoption. We are your trusted tech allies dedicated to providing and executing a sustainable roadmap per your business needs.',
        link: 'cto-as-a-service'
    }

]

const Services = () => {
    return (
        <>

            <div className="cardSection">
                <h1 className="text-black">Explore Full Cycle Software Development Services:
                    <span className="h2_blue">From Zero To One.</span></h1>
            </div>
            <div className="grid grid-cols-1 w-max m-auto lg:grid-cols-2 2xl:grid-cols-3 mb-10">
                {services.map((n) => <ServiceCard key={n.link} heading={n.heading} content={n.content} link={n.link} />)}
            </div>

          <SlickSlider />

          <TechWeUse />

          <div className="h-[400px]"></div>
            
        </>
    );
}

export default Services;