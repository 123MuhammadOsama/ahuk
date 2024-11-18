import TestimonialService from './TestimonialService'

const ContentSection = ({content,reviews}) => {
  return (
    <div className="flex flex-col px-5 lg:flex-row justify-center gap-10 items-center ">
        <div className="scrollable-section text-sm lg:text-base w-[90%] sm:w-[610px] md:w-[750px] lg:w-[980px] ">
            {content}
        </div>
        <TestimonialService reviews={reviews} />
        
    </div>
  )
}

export default ContentSection