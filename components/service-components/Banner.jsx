import Image from "next/image";

const Banner = () => {
  return (
    <div className=" w-full bg-gradient-to-r py-10 from-primary mb-5 to-secondary flex flex-col gap-y-10 justify-start items-center px-4">
      <div className="max-w-[700px] text-center flex flex-col gap-y-5  text-neutral-100 mt-10">
        <h2 className="text-3xl  font-semibold ">
        Core Features and Perks That Set Us Apart in Assignment Help
        </h2>
        <p>Want to know why we're the #1 choice for students? Get the inside scoop on what makes us the assignment pros!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 sm:gap-20 lg:gap-32 px-2 ">
        <BannerCard name={"Cheap Assignment Help"} desc={"On a budget? No problem! Our assignment writing services are designed with you in mind, offering competitive prices and great value for your money. Get instant assistance without draining your savings!"} image={"handmoney"}  />
        <BannerCard name={"Strict Privacy Protection"} desc={"Keep your secrets safe with us! Our staff signs NDAs, and we use top-notch SSL encryption to ensure your academic privacy remains intact. With ironclad confidentiality measures, your personal and assignment details are always secure with us!"} image={"protected"}  />
        <BannerCard name={"Originality Guaranteed"} desc={"Forget the fear of copycat content! Our writers whip up assignments from scratch, ensuring every word is 100% original and plagiarism-free. Plus, with advanced plagiarism checks, your work stays unique and authentic."} image={"docsearch"}  />
        <BannerCard name={"Non-Stop Customer Care"} desc={"Need help at any hour? Our dedicated support team is available around the clock to assist you with any questions or concerns whenever you need us."} image={"customercare"}  />
        <BannerCard name={"Flexible Payment Options"} desc={"Pay your way! Choose from a variety of payment options that suit you best—credit card, PayPal, bank transfer, and more. We make it easy and convenient to get your assignments without any hassle."} image={"Group"}  />
        <BannerCard name={"On-Time Delivery"} desc={"Running against the clock? Relax, our experts thrive even in the 11th hour. Whether it’s an urgent assignment or a longer project,  we guarantee timely delivery, every single time, without compromising quality."} image={"timely"}  />

      </div>

    </div>
  );
};
const BannerCard = ({name,desc,image}) => {
    return (
        <div className="h-[180px] w-[180px] sm:h-[170px] sm:w-[180px] md:h-[200px] md:w-[200px]  lg:h-[240px] lg:w-[240px] flex flex-col gap-y-1 justify-center items-center text-center ">
        <Image src={`/assets/${image}.png`} height={60} width={60} alt="assignment payment" className="h-[60px] w-[60px] object-contain " />
        <p className="font-semibold text-sm text-white">{name}</p>
        <p className="text-xs text-white lg:text-sm hidden sm:block ">{desc}</p>
        </div>

    )
}
export default Banner;
