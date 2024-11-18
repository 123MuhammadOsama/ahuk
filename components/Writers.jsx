"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Writers = () => {
  const writers = [
    {
      src: "/assets/writer-1.png",
      width: 190,
      height: 190,
      name: "Dr Emily Sterling",
      desc: (
        <>
          As a distinguished professor of English Literature, Dr. Sterling
          brings a wealth of knowledge and expertise to our academic writing
          team. With her extensive research in Victorian literature and critical
          theory, she's a guiding light for students navigating complex literary
          landscapes.
        </>
      ),
      rating: "4.7",
      projects: "450+",
      degree: "Phd in English Literature",
      className:
        "absolute top-44 left-32 transition-all ease-in-out cursor-pointer unselectable w-[80px] md:w-[150px] ",
    },
    {
      src: "/assets/writer-2.png",
      width: 150,
      height: 150,
      name: "Dr Luke Garcia",
      desc: (
        <>
          With a PhD in Chemistry and a keen eye for detail, Dr. Garcia has a
          reputation for producing insightful and engaging content that
          resonates with students. His dedication to academic excellence and
          unwavering focus on student achievement make him one of our best
          chemistry coursework writers.
        </>
      ),
      projects: "300+",
      degree: "L.L.M. in Law",
      rating: "4.8",
      className:
        "absolute bottom-24 left-10 transition-all ease-in-out cursor-pointer unselectable w-[80px] md:w-[150px] ",
    },
    {
      src: "/assets/writer-4.png",
      width: 150,
      height: 150,
      name: "Dr Daniel Wong",
      desc: (
        <>
          Dr. Wong, LL.M., is an exceptional international law and human rights
          expert. With a diverse legal scholarship and advocacy background, Dr.
          Wong's research addresses pressing global issues such as refugee
          rights, humanitarian law, and international conflict resolution.
        </>
      ),
      rating: "4.9",
      projects: "280+",
      degree: "MA in Economics",
      className:
        "absolute bottom-28 left-56 transition-all ease-in-out cursor-pointer unselectable w-[80px] md:w-[150px] ",
    },
    {
      src: "/assets/writer-5.png",
      width: 200,
      height: 200,
      name: "Professor Harry Damant",
      desc: (
        <>
          Professor Harry Damant is an esteemed microeconomics and market
          analysis expert, boasting a rich academic background and profound
          industry experience. His comprehensive understanding of supply and
          demand dynamics and analytical skills make him a valuable asset to our
          24/7 assignments service platform.
        </>
      ),
      rating: "4.9",
      projects: "150+",
      degree: "MA in Psychology",
      className:
        "absolute top-10 right-28 transition-all ease-in-out cursor-pointer unselectable w-[80px] md:w-[150px] ",
    },
    {
      src: "/assets/writer-3.png",
      width: 150,
      height: 150,
      name: "Professor Sophia Mindfield",
      desc: (
        <>
          Professor Mindfield is a renowned scholar with a deep understanding of
          social psychology and behavioural sciences. Her thorough research and
          knack for explaining complex concepts in simple terms make her a
          sought-after writer in the academic community.
        </>
      ),
      rating: "4.6",
      projects: "200+",
      degree: "Phd in Chemistry",
      className:
        "absolute bottom-44 right-14 transition-all ease-in-out cursor-pointer unselectable w-[80px] md:w-[150px] ",
    },
  ];

  const [activeWriter, setActiveWriter] = useState(writers[0]);

  return (
    <div className="p-2 flex flex-col xl:flex-row max-w-7xl 2xl:gap-x-24 mx-auto">
      <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
        <Image
          src={"/assets/shape-2.png"}
          width={600}
          height={600}
          alt="writers"
          className="absolute top-0 left-0 unselectable"
        />
        {writers.map((writer, index) => (
          <Image
            key={index}
            src={writer.src}
            width={writer.width}
            height={writer.height}
            alt={writer.name}
            className={`${writer.className} ${
              activeWriter.name === writer.name
                ? "scale-110 saturate-100"
                : "saturate-50 brightness-50 blur-sm "
            }`}
            onClick={() => setActiveWriter(writer)}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start items-start  sm:w-[500px] gap-y-4 mt-[10%] px-4 ">
        <h3 className="text-4xl font-semibold">{activeWriter.name}</h3>
        <p className="text-neutral-700 sm:text-lg">{activeWriter.desc}</p>
        <div className=" text-primary font-semibold">
          <div className="flex gap-x-2">
            <span className="text-2xl">{activeWriter.rating}</span>
            <span className="text-md">/5</span>
            <div className="flex ">
              <Star fill="#3AAB9F" stroke="#3AAB9F" />
              <Star fill="#3AAB9F" stroke="#3AAB9F" />
              <Star fill="#3AAB9F" stroke="#3AAB9F" />
              <Star fill="#3AAB9F" stroke="#3AAB9F" />
              <Star fill="#3AAB9F" stroke="#3AAB9F" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center justify-start mb-2 items-start gap-y-6 gap-x-12 lg:gap-x-24">
          <div className="flex gap-x-4 justify-center items-center">
            <Image
              src={"/assets/graduation-icon.png"}
              width={40}
              height={40}
              alt="graduation"
            />

            <div className="flex flex-col justify-start items-start">
              <p className="font-bold ">Degree</p>
              <p className="text-sm whitespace-nowrap">{activeWriter.degree}</p>
            </div>
          </div>
          <div className="flex gap-x-4 justify-center items-center">
            <Image
              src={"/assets/list-icon.png"}
              width={40}
              height={40}
              alt="list"
            />

            <div className="flex flex-col justify-start items-start">
              <p className="font-bold whitespace-nowrap">Projects Completed</p>
              <p className="text-sm whitespace-nowrap">
                {activeWriter.projects}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writers;
