'use client'
import React,{useState} from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Img_component = () => {
  let keypoints = [
    {
      heading: 'Front-end Development',
  },
  {
      heading: 'Back-end Development',
  },
  {
      heading: 'Content Management System (CMS) Integration',
  },
  {
      heading: 'E-commerce Features',
  },
  {
      heading: 'Responsive Design',
  },
  ];
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <>
      <div className="flex items-center flex-col md:flex-row">
        <div className="rounded-lg overflow-hidden h-full w-full md:w-6/12 mr-3">
          <Image
            width={100}
            height={100}
            className="h-full w-full object-cover"
            src={`/assets/images/contact.svg`}
          />
        </div>
        <div className="w-full md:w-6/12 ml-3">
          {keypoints?.map((n,index) => {
            return (
              <>
                <Accordion
                  open={open === index}
                  className="mx-auto border-slate-200 my-5 w-full "
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="text-black border-slate-300 border border-t-0 border-x-0"
                  >
                    {n.heading}
                  </AccordionHeader>
                  <AccordionBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis dolore doloremque cumque explicabo a tempora iste voluptatum, harum labore excepturi obcaecati assumenda fuga quam, id, eos voluptates magnam? Exercitationem?
                  </AccordionBody>
                </Accordion>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Img_component;
