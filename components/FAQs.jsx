"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
const FAQs = ({questions}) => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-8 sm:mb-4 sm:my-20">
        Frequently <span className="text-secondary">Asked</span> Questions
      </h2>
      <div className="flex flex-col-reverse xl:flex-row justify-between items-start px-2 md:px-6 gap-x-2">
        <div className="my-10 flex flex-col justify-center gap-y-6 max-w-4xl mx-auto">
          {questions.map((data, index) => (
            <AccordionItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => {
                toggle(index);
              }}
            />
          ))}
        </div>
        <Image
          src={"/assets/faqimg.png"}
          width={500}
          height={450}
          alt="best assignment writing reviews"
          className="object-contain mt-10 mb-2 mx-auto w-[500px] xl:w-[600px] flex-shrink-0"
        />
      </div>
    </div>
  );
};

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="border border-secondary shadow-sm shadow-secondary rounded-xl flex flex-col p-2 select-none">
      <div
        className="py-1 px-1 sm:py-2 sm:px-3 flex items-center cursor-pointer rounded-xl w-full justify-between"
        onClick={toggle}
      >
        <p className="sm:text-xl font-semibold text-sm  select-none w-[90%]">{title}</p>
        <div className=" w-9 h-9  rounded-full  p-[2px] bg-primary flex justify-center items-center">
          <ChevronDown
            className={` ${
              open ? "rotate-180" : "rotate-0"
            } transition-all  duration-300  text-white flex-shrink-0`}
          />
        </div>
      </div>
      <Collapse
        isOpened={open}
        theme={{
          collapse: "ReactCollapse--collapse",
          content: "ReactCollapse--content",
        }}
      >
        <div className=" pt-3  text-xs sm:text-sm md:text-md rounded-xl">
          <p className="select-none">{desc}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default FAQs;
