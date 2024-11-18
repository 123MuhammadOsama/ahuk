import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-white flex justify-between items-center relative   lg:pt-28 pt-32 pb-20">
      <div className="px-3 sm:px-6 space-y-6 sm:pl-12">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center lg:text-left leading-relaxed">
          Expert Assignments Help UK Services for Student Excellence
        </h1>
        <p className="text-lg text-center lg:text-left">
        Achieve your academic goals with the best assignment help services in the UK and join the ranks of top students. Quality, speed, and success are guaranteed! 
        </p>
        <div className="flex gap-x-4 justify-center items-center lg:justify-start lg:items-start">
          <button className="bg-gradient-to-r from-primary to-teal-800 text-center w-[150px] text-lg p-3 text-white rounded-full hover:scale-105 transition-all">
            Chat Now
          </button>
          <Link href={"/order"} className="border border-teal-800 text-center w-[150px] text-lg p-3  rounded-full text-teal-700 hover:scale-105 transition-all">
            Order Now
          </Link>
        </div>
        <div className="flex gap-4 justify-center items-center lg:justify-start lg:items-start lg:flex-row flex-col ">
          <Image src={"/assets/sitejabber.png"} width={150} height={150} alt="sitejabber" className="object-contain" />
          <Image src={"/assets/trustpilot.png"} width={150} height={150} alt="trustpilot" className="object-contain" />
          <Image src={"/assets/reviewsio.png"} width={150} height={150} alt="reviewsio" className="object-contain" />
        </div>
      </div>
      <Image
        src={"/assets/hero-image.png"}
        width={900}
        height={900}
        alt={"Assignment Help UK"}
        className="ml-auto lg:block hidden  lg:w-[600px] xl:w-[800px] 2xl:w-[900px]"
      />
    </div>
  );
};

export default Hero;
