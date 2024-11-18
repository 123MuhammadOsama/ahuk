import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center px-3 relative">
      <Image
        src={"/assets/shape-1.png"}
        width={300}
        height={300}
        alt={"Assignment Help UK"}
        className="hidden lg:block absolute right-14 top-16 -z-10 opacity-25 rotate-45"
      />
      <div className="flex flex-col gap-y-10 mb-10 sm:mb-0">
        {serviceColumn1.map((service, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center max-w-[500px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={150}
                height={150}
                className="mb-auto"
              />
              <div className="flex flex-col gap-y-2">
                <p className="font-bold text-xl text-primary">
                  {service.title}
                </p>
                <p className="text-sm ">{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={"/assets/service-image.png"}
        width={600}
        height={900}
        className="mt-auto lg:block hidden"
        alt="assignment help service"
      />
      <div className="flex flex-col gap-y-10 mb-20 sm:mb-0">
        {serviceColumn2.map((service, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center max-w-[500px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={150}
                height={150}
                className="mb-auto"
              />
              <div className="flex flex-col gap-y-2">
                <p className="font-bold text-xl text-primary">
                  {service.title}
                </p>
                <p className="text-sm">{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const serviceColumn1 = [
  {
    image: "/assets/service-icon-1.svg",
    title: <>HND Assignment Help</>,
    desc: (
      <>
        Stuck on your HND assignments? Our team makes tackling complex HND tasks
        easy! Whether it's a tricky project or a challenging essay, we turn your
        academic struggles into top-notch work. Let’s get those grades soaring!
      </>
    ),
  },
  {
    image: "/assets/service-icon-2.svg",
    title: <>Nursing Assignment Help</>,
    desc: (
      <>
        Nursing assignments making you feel like you're drowning in details? Our
        experts are here to rescue you! From care plans to patient assessments,
        we handle the heavy lifting so you can focus on acing your clinical
        skills.
      </>
    ),
  },
  {
    image: "/assets/service-icon-3.svg",
    title: <>Law Assignment Help</>,
    desc: (
      <>
        Law assignments got you tangled in legal terms? We’ve got your back! Our
        legal eagles break down case studies, statutes, and more, turning
        confusing legalese into clear, compelling arguments. Ace your law
        studies with ease!
      </>
    ),
  },
  {
    image: "/assets/service-icon-4.svg",
    title: <>Dissertation Writing Help</>,
    desc: (
      <>
        Feeling overwhelmed by your dissertation? Let us shoulder your burden by
        providing dissertation help! We provide expert support from structuring
        to editing, ensuring your paper shines and stands out. Let’s make your
        research remarkable!
      </>
    ),
  },
];
const serviceColumn2 = [
  {
    image: "/assets/service-icon-5.svg",
    title: <>Homework Help</>,
    desc: (
      <>
        Homework feeling like a never-ending marathon? Our homework heroes are
        here to save the day! From maths problems to history essays, we tackle
        your assignments so you can kick back and enjoy your free time.
      </>
    ),
  },
  {
    image: "/assets/service-icon-6.svg",
    title: <>Essay Writing Help</>,
    desc: (
      <>
        Struggling to craft that perfect essay? Our writing wizards turn your
        ideas into polished prose! Whether it’s for class or publication, trust
        our essay writing service to craft essays that grab attention and earn
        high marks.
      </>
    ),
  },
  {
    image: "/assets/service-icon-7.svg",
    title: <>Case Study Help</>,
    desc: (
      <>
        Trouble figuring out your case study details? Our experts will piece it
        all together! From analysing data to presenting findings, we ensure your
        case studies are thorough and insightful. Let’s solve those case study
        challenges!
      </>
    ),
  },
  {
    image: "/assets/service-icon-8.svg",
    title: <>PowerPoint Presentation Help</>,
    desc: (
      <>
        PowerPoint presentations stressing you out? Let us transform your slides
        from boring to mind-blowing! We’ll assist you in the creation process
        and provide tips on effective presentation techniques, ensuring your
        message is delivered with impact and professionalism.
      </>
    ),
  },
];

export default Services;
