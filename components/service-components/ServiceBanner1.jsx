"use client";
import Lottie from "react-lottie";
import * as animationData from "@/public/assets/banner-lottie.json";
const ServiceBanner1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="bg-neutral-100 flex flex-col lg:flex-row justify-between items-center p-5 relative py-2 mx-4 lg:mx-auto max-w-4xl overflow-hidden rounded-lg -mt-24 ">
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <div className="text-3xl lg:text-4xl text-secondary text-center lg:text-left uppercase">
        Get in Touch with Our Top Writers for Grade Upgrade!
        
        </div>
        <button className="mx-auto p-2 px-2 rounded-lg bg-gradient-to-r from-primary to-teal-800 text-white text-lg mt-4">
          Chat Now
        </button>
      </div>
      <div className="w-[400px] h-[300px] bg-secondary rounded-full absolute -top-44 -right-24 opacity-20"></div>
      <Lottie options={defaultOptions} height={200} width={300} />
    </div>
  );
};

export default ServiceBanner1;
