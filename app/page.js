import Content from '@/components/Content'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HomeFAQs from '@/components/HomeFAQs'
import OrderSteps from '@/components/OrderSteps'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Writers from '@/components/Writers'
import { homeAccordionData1, homeAccordionData2 } from '@/constants/accordionData'


export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Services />
    <Stats />
    <Content />
    <Writers />
    <Testimonials />
    <OrderSteps />
    <div className='flex flex-col justify-center items-center mx-auto'>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-8 sm:mb-4 sm:my-20 mx-auto">
        Frequently <span className="text-secondary">Asked</span> Questions
      </h2>
      <div className='flex flex-col md:flex-row max-w-6xl mx-auto mb-12 justify-center items-start'>
    <HomeFAQs faqData={homeAccordionData1} />
    <HomeFAQs faqData={homeAccordionData2}/>
    </div>
    </div>
    </>
  )
}