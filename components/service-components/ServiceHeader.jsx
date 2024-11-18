import Image from 'next/image'
import React from 'react'
import ServiceBanner1 from './ServiceBanner1'

const ServiceHeader = ({serviceName, serviceDesc}) => {
  return (
    <div className=" bg-white relative  overflow-hidden">

    <div className='bg-gradient-to-r relative from-primary to-secondary p-4 lg:p-10 flex flex-col justify-center items-center mt-20 pb-32 pt-16 lg:pt-32 lg:pb-32 text-neutral-100  '>
        <h1 className='font-semibold text-5xl lg:text-6xl mb-5 z-10 text-center'>{serviceName}</h1>
        <p className='text-center  text-base lg:text-xl z-10'>{serviceDesc}</p>
        <div className='flex flex-col lg:flex-row justify-center items-start gap-y-9 gap-x-32 mt-10 z-10'>
          <div className='flex gap-2 justify-center items-center'>
            <Image src={"/assets/student-boy-icon.svg"} width={50} height={50} className=""/>
            <div className='flex flex-col'>
              <p className='text-xl font-semibold'>PHD Writers</p>
              <p>Resolve Queries</p>
            </div>
          </div>
          <div className='flex gap-2 justify-center items-center'>
          <Image src={"/assets/five-stars-thumbs-up-icon.svg"} width={40} height={40} className=""/>
          <div className='flex flex-col'>
              <p className='text-xl font-semibold'>Rated 4.7/5</p>
              <p>Out of 5489 Reviews</p>
            </div>
          </div>
          <div className='flex gap-2 justify-center items-center'>
          <Image src={"/assets/file-check-alt-svgrepo-com.svg"} width={50} height={50} className=""/>
          <div className='flex flex-col'>
              <p className='text-xl font-semibold'>AI Free</p>
              <p>Content</p>
            </div>
          </div>
        </div>
    </div>
    <ServiceBanner1 />
    </div>
  )
}

export default ServiceHeader