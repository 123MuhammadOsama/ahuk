import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({heading,desc}) => {
  return (
    <div className=" max-w-4xl p-4 mt-20 -mb-4 rounded-2xl mx-2 lg:mx-auto bg-secondary text-white flex justify-center items-center z-10">
            <Image src="/assets/service-section-image.png" width={200} height={200} alt="" className="hidden lg:block" />
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold text-primary text-center">{heading ? heading : "Inspired to Succeed? Let’s Work Together – Get in Touch Now!"}</p>
                <p className="text-neutral-100 text-center p-4">{desc ? desc : "Trust Us and See How Our Expertise Can Benefit You"}
                </p>
                <Link href={"/order"} className="bg-neutral-100 text-primary p-2 px-2 rounded-lg hover:bg-primary hover:text-white transition-all">Order Now</Link>
            </div>
    </div>
  )
}

export default FooterBanner