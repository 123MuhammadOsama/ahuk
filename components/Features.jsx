import React from "react";
import Image from "next/image";
const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center relative pb-10 px-3">
      <Image
        src={"/assets/shape-1.png"}
        width={300}
        height={300}
        alt={"Assignment Help UK"}
        className="absolute hidden lg:block -z-10  left-14 top-16 opacity-25 rotate-45"
      />
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Top Benefits of Choosing Online Assignment Help UK Platform
      </h2>
      <p className="text-base sm:text-lg text-center max-w-7xl">
        Why settle for less when you can have the best? From stress-free
        submissions to top grades, explore our high-quality assignments service
        unbeatable perks tailor-made for you and elevate your academic game!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 max-w-7xl">
        {featureList.map((feature, index) => {
          return (
            <div key={index}>
              <FeatureCard
                name={feature.name}
                image={feature.image}
                desc={feature.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FeatureCard = ({ name, image, desc }) => {
  return (
    <div className="p-5 flex flex-col justify-start items-center  border-primary border rounded-lg shadow-md shadow-secondary max-w-sm h-full">
      <div className="w-[60px] h-[60px] flex items-center justify-center mb-4">
        <Image src={image} width={50} height={50} alt={name} />
      </div>
      <h3 className="text-lg font-semibold uppercase">{name}</h3>
      <p className="text-center">{desc}</p>
    </div>
  );
};

const featureList = [
  {
    name: "Plagiarism-Free Content",
    image: "/assets/q-medal.png",
    desc: (
      <>
        Your assignments are crafted from scratch, ensuring 100% originality. We
        use advanced plagiarism detection tools to guarantee your work is
        completely unique and meets academic standards.
      </>
    ),
  },
  {
    name: "Budget-Friendly Rates",
    image: "/assets/q-payment.png",
    desc: (
      <>
        Stretched budget? No worries! Our assignment help services are designed
        with students in mind, offering top-notch assistance at prices you can
        afford. Quality doesn’t have to be expensive.
      </>
    ),
  },
  {
    name: "Total Confidentiality",
    image: "/assets/q-shield.png",
    desc: (
      <>
        Your privacy matters. Our site is SSL-certified and we follow strict
        non-disclosure policies, ensuring your details are safe and your
        academic integrity is protected.
      </>
    ),
  },
  {
    name: "24 /7 Customer Support",
    image: "/assets/q-file.png",
    desc: (
      <>
        Need help at any hour? Our dedicated assignment services UK support team
        is available around the clock to assist you with any questions or
        concerns whenever you need us.
      </>
    ),
  },
  {
    name: "Timely Delivery",
    image: "/assets/q-ontime.png",
    desc: (
      <>
        Our experts thrive even in the 11th hour and work diligently to ensure
        your assignments are completed and delivered on time, giving you peace
        of mind and more free time.
      </>
    ),
  },
  {
    name: "Certified Professionals",
    image: "/assets/q-education.png",
    desc: (
      <>
        Work with PhD and Masters qualified experts in various fields. Our pros
        bring their knowledge and experience to every assignment, ensuring high
        quality and accuracy.
      </>
    ),
  },
];

export default Features;
