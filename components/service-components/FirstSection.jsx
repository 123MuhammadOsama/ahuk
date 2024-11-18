import Image from "next/image";
import React from "react";

const FirstSection = ({ heading, p, content }) => {
  return (
    <div className="flex flex-col justify-center items-center my-24 relative px-4">
      <Image
        src={"/assets/shape-1.png"}
        className={"opacity-20 lg:absolute top-0 right-0 hidden lg:block -z-10 "}
        width={500}
        height={500}
        alt=""
      />
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-5xl text-primary font-bold text-center">
          {heading}
        </h2>
        <p className=" text-center mt-5  font-semibold text-teal-700">{p}</p>
      </div>
      <div className="flex mt-12 lg:mt-24 gap-14">
        <div className="max-w-2xl text-sm lg:text-block  text-center lg:text-left">{content}</div>
        <Image
          src={"/assets/service-section-image.png"}
          width={500}
          height={300}
          className="object-contain hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default FirstSection;
