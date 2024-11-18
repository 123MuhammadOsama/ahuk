"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// List of objects containing the image, title, and description of the ordering steps
const steps = [
  {
    image: "/assets/order-file.svg",
    title: "Fill Out the Order Form",
    desc: (
      <>
         Start by filling out our easy-to-use order form
        on our website with your assignment details and requirements.
      </>
    ),
  },
  {
    image: "/assets/order-chat.svg",
    title: "Contact Customer Support",
    desc: (
      <>
        Contact Customer Support: Prefer direct interaction? Reach out to our assignment writing service via Chatbox, Email, or simply WhatsApp us on +44 7380 885273. Our team members will promptly assist you.

      </>
    ),
  },
  {
    image: "/assets/order-card.svg",
    title: "Receive Your Quote",
    desc: (
      <>
        Once you share your requirements, you'll receive a
        transparent quote tailored to your assignment's details.
      </>
    ),
  },
  {
    image: "/assets/order-secure.svg",
    title: "Secure Your Order",
    desc: (
      <>
        Confirm your order by making a secure half payment.
        All transactions are protected for your peace of mind.
      </>
    ),
  },
  {
    image: "/assets/order-confirm.svg",
    title: "Assignment Preview",
    desc: (
      <>
        After your assignment is completed, we'll provide a
        preview for your review so you can suggest changes if you want.
      </>
    ),
  },
  {
    image: "/assets/order-payment.svg",
    title: "Complete the Payment",
    desc: (
      <>
         Once satisfied, pay the full remaining amount to
        finalise your order.
      </>
    ),
  },
  {
    image: "/assets/order-completion.svg",
    title: "Assignment Delivery",
    desc: (
      <>
        Once the full payment is received, your assignment
        will be promptly delivered to you.
      </>
    ),
  },
];

const OrderSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center  lg:w-[700px] h- mx-auto my-14">
      <h2 className="font-semibold text-3xl sm:text-4xl mb-4 text-center">
        Order Assignment help Online in Just a Few Clicks
      </h2>
      <div className="flex flex-col p-2 sm:p-5 border border-secondary rounded-lg w-[350px] sm:w-[600px] lg:w-[950px] h-[300px]">
        <div className="flex justify-between items-center shadow p-1 sm:p-3 rounded-md gap-x-1 sm:gap-x-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`h-12 w-12 ${
                activeStep === index ? "border border-secondary" : ""
              } rounded cursor-pointer ${
                activeStep === index ? "border-primary" : ""
              }`}
              onClick={() => setActiveStep(index)}
            >
              <Image
                src={step.image}
                alt={`Step ${index + 1}`}
                width={32}
                height={32}
                className={`${
                  activeStep === index ? "saturate-100 border" : "saturate-0 border border-white"
                } h-full w-full p-1`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between items-center mt-4 h-full">
          <Image
            src={steps[activeStep].image}
            width={240}
            height={240}
            alt={`Step ${activeStep + 1}`}
            className="w-[150px] h-[150px] mx-auto hidden lg:block"
          />
          <div className="flex flex-col sm:ml-4 col-span-2 h-full justify-between">
            <h3 className="text-xl font-semibold">{steps[activeStep].title}</h3>
            <p className="mt-2">{steps[activeStep].desc}</p>
            <Link href={"/order"} className="p-2 text-center bg-primary text-white rounded mt-auto">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
