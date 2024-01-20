import React from 'react'


export default function Footer() {
  return (
    <div className="text-[#7A7A7A] place-content-center relative ">
      <div className="mx-9 text-[8px] font-medium font-['Poppins'] min-[375px]:text-[10px] sm:text-[12px]  sm:mx-[5rem] md:text-[15px] md:mx-[8rem] lg:text-[18px] lg:mx-[12rem] xl:mx-[20rem]">
        <div className='flex place-content-center'>
          <div className='px-2 py-5' ><strong><a href="https://dbuglabs.com">Home</a></strong></div>
          {/* <div className='px-2 py-5' >Our Services</div> */}
          {/*<div className='px-2 py-5' >Our Team</div>*/}
          <div className='px-2 py-5' ><a href="#">Events</a></div>
          <div className='px-2 py-5' ><a href="#">About Us</a></div>
          {/*<div className='px-2 py-5' >What's New</div>*/}
        </div>

        <div className='flex items-center place-content-center -mb-3 text-white sm:mt-3 lg:mt-5'>
          <img className='-mt-0.23 mr-1 w-2.5 sm:w-3.5 md:w-5' src="src\components\Footer\Assets\logog.svg" alt="dBug Labs" />
          <div className='py-1.5'>dBug Labs </div>
          <div className='py-1.5'>&nbsp; - &nbsp;</div>
          <a href="https://www.instagram.com/dbuglabs/" className='px-1 py-0.5 bg-gray-800 rounded border border-gray-800'>@dbuglabs</a>
        </div>

        <div>
          <p className='px-13 py-10 text-center mt-0'>Join Dbug Labs, the student club dedicated to mastering the art of debugging and testing. Enhance your skills, share your knowledge, share your knowledge, and work collaboratively in a supportive community of like-minded students.</p>
        </div>
        <div className='flex flex-col place-content-center items-center z-10'>
          <a className='flex flex-row' href="mailto:hello@dbuglabs.com">@ hello@dbuglabs.com &#8226; &nbsp; <img className='w-2 sm:w-3 md:w-4' src="src\components\Footer\Assets\phone-solid.svg" alt="Phone" /> +91 7337334895</a>
          <a className='flex flex-row pt-8 pb-12' href="#"> &#169; Crafted with &nbsp; <img className='w-2 sm:w-3 md:w-4' src="src\components\Footer\Assets\heart-solid.svg" alt="Hear" /> &nbsp; dbug Labs 2024</a>
        </div>

      </div>
      <img className='absolute h-24 left-0 bottom-0 -z-10 min-[375px]:h-28 sm:h-32 md:h-44 lg:h-56 xl:h-72' src="src\components\Footer\Assets\Logo BW.svg" alt="" />
    </div>
  )
}
