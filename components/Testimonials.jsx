"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Testimonials = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center">
      <h2 className="text-3xl font-bold">Client Testimonials</h2>
      <div className="flex flex-col px-2 xl:flex-row gap-y-11 justify-center items-center gap-x-3 2xl:gap-x-10">
        <div className="w-[350px] sm:w-[420px] flex flex-col justify-center items-center h-[450px] border rounded-xl border-secondary p-2">
          <span className="text-2xl">Feedbacks</span>
          <div
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#3AAB9F transparent",
            }}
            className="h-[500px] overflow-y-scroll w-full"
          >
            <div className="h-[1000px] w-full flex flex-col items-center gap-y-5 ">
              {/* Here starts one review */}

              <Review
                clientName={"Jessica"}
                review={
                  <>
                    Absolutely saved my semester! I was drowning in assignments
                    and deadlines. They took over and delivered top-notch work.
                    Can't thank them enough!
                  </>
                }
              />
              <Review
                clientName={"Ellen"}
                review={
                  <>
                    I was doubtful at first, but this assignment writing service
                    UK agency really came through. My essay was well-researched
                    and got me an A. Definitely using them again!
                  </>
                }
              />
              <Review
                clientName={"Benedict"}
                review={
                  <>
                    Best decision ever! They took my confusing topic and made it
                    understandable. My paper was clear, concise, and
                    well-structured. Highly recommend!
                  </>
                }
              />
              <Review
                clientName={"Karen"}
                review={
                  <>
                    Wow, just wow. I had no idea how to start my dissertation,
                    but these guys nailed it. Professional, timely, and worth
                    every penny!
                  </>
                }
              />
              <Review
                clientName={"Sonya"}
                review={
                  <>
                    I had zero time to write my report because of work, and they
                    totally saved me. The quality was amazing, and I got it
                    before the deadline. Lifesavers!
                  </>
                }
              />
              <Review
                clientName={"Richard"}
                review={
                  <>
                    Honestly, I was stuck with my research paper and had no clue
                    how to format it properly. They sorted everything out and my
                    professor loved it!
                  </>
                }
              />
              <Review
                clientName={"Lillian"}
                review={
                  <>
                    Needed help with a literature review and they nailed it.
                    Sources were credible and perfectly cited. Got an A+ and
                    couldn't be happier!
                  </>
                }
              />
              <Review
                clientName={"Riley"}
                review={
                  <>
                    I struggled with maintaining a formal tone in my writing,
                    but they made my assignment sound professional and academic.
                    So impressed!
                  </>
                }
              />
              <Review
                clientName={"Maxine"}
                review={
                  <>
                    Was really stressed about my coursework, but they took care
                    of everything. The content was original and plagiarism-free.
                    Great service!
                  </>
                }
              />
              <Review
                clientName={"Hailey"}
                review={
                  <>
                    Assignments Help UK is the best! They helped me balance my
                    part-time job and studies by taking on my heavy workload.
                    Their support was a game-changer for me!
                  </>
                }
              />
              {/* Here it ends */}
            </div>
          </div>
        </div>
        <div className="h-fit max-w-4xl  lg:border lg:border-secondary rounded-xl p-5">
          <div className="flex flex-col gap-y-10">
            <div className="hidden lg:flex justify-center items-center gap-5">
              <TestimonialCard
                cardName={"Essays in Progress"}
                cardValue={"48"}
                finalWidth={"90%"}
              />
              <TestimonialCard
                cardName={"Online Operations"}
                cardValue={"512"}
                finalWidth={"90%"}
              />
              <TestimonialCard
                cardName={"Assignments Delivered"}
                cardValue={"13050"}
                finalWidth={"85%"}
              />
              <TestimonialCard
                cardName={"Active Writers"}
                cardValue={"19"}
                finalWidth={"70%"}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-x-4 items-center">
              <div className="h-[250px] w-[230px] bg-secondary rounded-xl flex flex-col gap-3 justify-center items-center">
                <CircularProgressbar
                  value={90}
                  text="90%"
                  className="h-[100px]"
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: "#ffffff",
                    trailColor: "#3AAB9F",
                    pathColor: "#042E58",
                  })}
                />
                <span className="text-lg text-neutral-100 uppercase font-bold tracking-widest">
                  Our Happy Bar
                </span>
                <span className="text-sm tracking-wider text-neutral-200">
                  15k+ Projects Done
                </span>
              </div>
              <Image
                src={"/assets/stat-graph.png"}
                width={600}
                height={360}
                alt="assignments graph"
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ cardName, cardValue, finalWidth }) => {
  return (
    <div className="w-[230px] h-[120px] border border-secondary rounded-xl p-2 flex flex-col gap-3">
      <span className="text-sm text-primary whitespace-nowrap">{cardName}</span>
      <span className="font-bold">{cardValue}</span>
      <div className="h-1 bg-neutral-200 w-full">
        <motion.div
          initial={{
            width: "0%",
          }}
          whileInView={{
            width: `${finalWidth}`,
          }}
          transition={{
            duration: 1.5,
            ease: "anticipate",
          }}
          className="h-1 bg-secondary w-full rounded-xl"
        ></motion.div>
      </div>
    </div>
  );
};
const Review = ({ clientName, review }) => {
  return (
    <div className="flex  items-center gap-x-4 w-[330px] sm:w-[500px] max-w-sm h-fit">
      <Image
        src={"/assets/user.png"}
        width={50}
        height={50}
        alt="AHUK"
        className="mb-auto pt-1"
      />
      <div className="flex flex-col">
        <span className="text-primary text-lg">{clientName}</span>{" "}
        <span className="text-sm">{review}</span>
      </div>
    </div>
  );
};
export default Testimonials;
