"use client"
import Image from 'next/image'
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className='w-full py-5 flex flex-col lg:flex-row justify-center items-center bg-gradient-to-tl from-primary to-secondary' >
<Image src={"/assets/statsimage.png"} height={500} width={500} alt='ahuk' className='' />
<div className='grid grid-cols-2 justify-center items-center gap-10 px-2'>
    <div className='flex justify-center items-center flex-col gap-2'>
<span className='text-xl lg:text-3xl text-white font-bold'>Projects Done</span>
<CountUp
            className="text-3xl  text-white sm:text-4xl md:text-5xl "
            end={120}
            suffix={"K+"}
            delay={0.75}
            duration={5}
            enableScrollSpy
            scrollSpyOnce
            
          />

    </div>
    <div className='flex justify-center items-center flex-col gap-2'>
<span className='text-xl lg:text-3xl text-white font-bold'>Experts</span>
<CountUp
            className="text-3xl  text-white sm:text-4xl md:text-5xl "
            end={600}
            suffix={"+"}
            delay={0.75}
            duration={5}
            enableScrollSpy
            scrollSpyOnce
            
          />

    </div>
    <div className='flex justify-center items-center flex-col gap-2'>
<span className='text-xl lg:text-3xl text-white font-bold text-center'>Satisfied Customers</span>
<CountUp
            className="text-3xl  text-white sm:text-4xl md:text-5xl "
            end={9000}
            suffix={"+"}
            delay={0.75}
            duration={5}
            enableScrollSpy
            scrollSpyOnce
            
          />

    </div>
    <div className='flex justify-center items-center flex-col gap-2'>
<span className='text-xl lg:text-3xl text-white font-bold text-center'>Projects In Progress</span>
<CountUp
            className="text-3xl  text-white sm:text-4xl md:text-5xl "
            end={500}
            suffix={"+"}
            delay={0.75}
            duration={5}
            enableScrollSpy
            scrollSpyOnce
            
          />

    </div>
    
    <div className='flex justify-center items-center flex-col gap-2 bg-primary hover:bg-secondary transition-all duration-300 rounded-xl text-white text-xl w-fit p-4 h-fit mx-auto'>
<span>Order Now</span>
    </div>



</div>

    </div>
  )
  
};
const StatCounter = ({
    name,
    image,
    alt,
    value,
    decimal,
    decimalValue,
    suffix,
  }) => {
    return (
      <div className="flex items-center p-2 sm:p-3 md:p-6 text-neutral-100">
        <div className="w-36 sm:w-56 md:w-72 lg:w-96 grid grid-cols-2 justify-center items-center pl-0 lg:pl-2 gap-0 lg:gap-10 xl:gap-2 ">
          <CountUp
            className="text-xl sm:text-4xl md:text-5xl "
            end={value}
            decimal={decimal}
            decimals={decimalValue}
            suffix={suffix}
            delay={0.75}
            duration={5}
            enableScrollSpy
            scrollSpyOnce
            
          />
          <div>
            <p className="text-xs md:text-lg capitalize mt-2">{name}</p>
            <div className=" w-16 h-[1px] bg-secondary rounded-full my-2"></div>
          </div>{" "}
        </div>
      </div>
    );
  };
  

export default Stats