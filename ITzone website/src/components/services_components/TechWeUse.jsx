'use client';

import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import Image from "next/image";


const backendImgs = [
    { url: "nest-js.svg", alt: 'Nest JS' },
    { url: 'ruby-on-rails.svg', alt: 'Ruby On Rails' },
    { url: 'node-js.svg', alt: 'Node JS' },
    { url: 'flask.svg', alt: 'Flask' },
    { url: 'next-js.svg', alt: 'Next JS' },
    { url: 'python.svg', alt: 'Python' },
    { url: 'django.svg', alt: 'Django' },
    { url: 'express-js.svg', alt: 'Express JS' },
];

const frontendImgs = [
    { url: 'next-js.svg', alt: 'Next JS' },
    { url: 'react-js.svg', alt: 'React JS' },
    { url: 'typescript.svg', alt: 'Type Script' },
    { url: 'javascript.svg', alt: 'Java Script' },
    { url: 'redux.svg', alt: 'Redux' },
    { url: 'webpack.svg', alt: 'Webpack' },
    { url: 'html5.svg', alt: 'HTML 5' },
    { url: 'css3.svg', alt: 'CSS 3' },
];
const designImgs = [
    { url: 'figma.svg', alt: 'Figma' },
    { url: 'adobe-illustrator.svg', alt: 'Adobe Illustrator' },
    { url: 'adobe-photoshop.svg', alt: 'Adobe Photoshop' },
];
const databaseImgs = [
    { url: 'postgresql.svg', alt: 'Postgre SQL' },
    { url: 'neo4j.svg', alt: 'Neo 4J' },
    { url: 'mongodb.svg', alt: 'Mongo DB' },
    { url: 'sql-server.svg', alt: 'SQL Server' },
    { url: 'my-sql.svg', alt: 'My SQL' },
    { url: 'redis.svg', alt: 'Redis' },
];
const testingImgs = [
    { url: 'jmeter.svg', alt: 'J Meter' },
    { url: 'pytest-logo.svg', alt: 'PyTest' },
    { url: 'mocha.svg', alt: 'Mocha' },
    { url: 'rspec.svg', alt: 'RSpec' },
];
const devOpsImgs = [
    { url: 'kubernetes.svg', alt: 'Kubernetes' },
    { url: 'docker.svg', alt: 'Docker' },
    { url: 'jenkins.svg', alt: 'Jenkins' },
    { url: 'aws-logo.svg', alt: 'AWS' },
    { url: 'azure-logo.svg', alt: 'Microsoft Azure' },
    { url: 'google-cloud.svg', alt: 'Google Cloud' },
];
const cloudImgs = [
    { url: 'gcp-seeklogo.svg', alt: 'GCP' },
    { url: 'azure-logo.svg', alt: 'Microsoft Azure' },
    { url: 'aws-logo.svg', alt: 'AWS' },
    { url: 'kubernetes.svg', alt: 'Microsoft Azure' },
    { url: 'google-cloud.svg', alt: 'Google Cloud' },
    { url: 'docker.svg', alt: 'Docker' },
];

const otherImgs = [
    { url: 'appian.svg', alt: 'Appian' },
    { url: 'bubble.svg', alt: 'Bubble.io' },
    { url: 'flutter.svg', alt: 'Flutter' },
];




const tech = [
    {
        heading: 'Backend',
        num: 0,
        images: backendImgs

    },
    {
        heading: 'Frontend',
        num: 1,
        images: frontendImgs
    },
    {
        heading: 'Design',
        num: 2,
        images: designImgs
    },
    {
        heading: 'Database',
        num: 3,
        images: databaseImgs
    },
    {
        heading: 'Testing',
        num: 4,
        images: testingImgs
    },
    {
        heading: 'DevOps',
        num: 5,
        images: devOpsImgs
    },
    {
        heading: 'Cloud/Platform',
        num: 6,
        images: cloudImgs
    },
    {
        heading: 'Others',
        num: 7,
        images: otherImgs
    },

]
const TechWeUse = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="row justify-center">
                    <div className="w-full">
                        <div className="section_title">
                            <h2 className="h2_blue">What Tech Stacks We Use?</h2>
                            <p className="p_under_heading">
                                We are made of 50% people skills and 50% tools to ensure constant performance and security featuring uncompromising quality and speed.
                            </p>
                        </div>
                    </div>
                </div>
                {/* content */}
                <>
                    {/* <Accordion open={alwaysOpen} className="mx-auto my-5 w-[80%] border border-slate-200 rounded-2xl" >
                        <AccordionHeader onClick={handleAlwaysOpen} className="ps-4 border-slate-300 border border-t-0 border-x-0 rounded-2xl">Backend</AccordionHeader>
                        <AccordionBody>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                {backendImgs.map((n) =>
                                    <div className="flex flex-col h-25 justify-center items-center">
                                        <Image src={'/assets/images/tech-svgs/' + n.url} className="h-25 w-25" height={100} width={100} alt={n.alt} />
                                        <p className="" >{n.alt}</p>
                                    </div>
                                )}
                            </div>
                        </AccordionBody>
                    </Accordion> */}
                    {tech.map((n) => (
                        <Accordion open={open === n.num} className="mx-auto border-slate-200 my-5 w-[80%] border rounded-2xl">
                            <AccordionHeader onClick={() => handleOpen(n.num)} className="ps-4 border-slate-300 border border-t-0 border-x-0 rounded-2xl">{n.heading}</AccordionHeader>
                            <AccordionBody>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                    {n.images.map((d) =>
                                        <div className="flex flex-col h-25 justify-center items-center">
                                            <div className="h-25 w-25 pt-5 flex justify-center">
                                                <Image src={'/assets/images/tech-svgs/' + d.url} height={80} width={80} alt={d.alt} />
                                            </div>
                                            <p className="text-center" >{d.alt}</p>
                                        </div>
                                    )}
                                </div>
                            </AccordionBody>
                        </Accordion>
                    ))}
                </>

            </div>
            {/* container */}
        </section>
    );
}

export default TechWeUse;