
import Image from "next/image";

const TestimonialService = ({reviews}) => {
  return (
    <div className="w-[350px] sm:w-[450px] flex flex-col justify-center items-center h-[520px] border rounded-xl border-secondary p-2">
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
          {reviews.map((post,index) => (
            <div>
              <Review
              key={index}
              clientName={post.userid}
              review={[post.review]}
              
              />
            </div>
          ))}
          
        </div>
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

export default TestimonialService;
