import React from 'react'

export default function ContactUs() {
  return (
    <div className="bg-black text-white font-light place-content-center my-12 md:mx-10 lg:mx-24">
      <div className='lg:grid lg:grid-cols-2 lg:gap-x-48 lg:place-items-center ml-[42px] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
        <div>
            <div>
            <img className='w-48 md:w-52 lg:w-60 xl:w-80' src="src\components\ContactUs\Assets\Get connected with us.svg" alt="Get Connected With Us" />
          </div>

          <div>
            <p className='px-13 py-5 mt-0 mr-[16px]'>Join a fast-growing community of developers and innovators connected all over the world, building the new era of debugging.</p>
          </div>
        </div>

        <div className=''>
          <div className='text-[9px] mr-8 sm:text-[12px] md:text-[15px]'>
            <div className='grid grid-cols-2 grid-rows-1 gap place-content-center mb-8 lg:grid-cols-1 lg:grid-rows-4 lg:gap-y-8'>
              <div className="flex flex-row items-start flex-1 w-25 sm:max-w-60 md:max-w-64 lg:min-w-72">
                <div className="mt-0.5">
                  <img src="src\components\ContactUs\Assets\Globe.svg" alt="Globe" className="w-10 min-[375px]:w-[30px] sm:w-8 md:w-10" />
                </div>
                <div className='pl-2'>
                  <div className="flex items-center">
                    <a href="https://dbuglabs.com" className="text-white font-bold hover:underline flex flex-row">dbuglabs.com&nbsp;<img className='w-1.5 mb-1' src="src\components\ContactUs\Assets\link-arrow.svg" alt="Link" /> </a>
                  </div>
                  <div className=''>Get to know more about our future events and activities through our website.</div>
                </div>
              </div>

              <div className="flex flex-row items-start flex-1 w-25 sm:max-w-60 md:max-w-64">
                <div className="mt-0.5">
                  <img src="src\components\ContactUs\Assets\Insta.svg" alt="Instagram" className="w-7 min-[375px]:w-[20px] sm:w-4.5 md:w-7" />
                </div>
                <div className='pl-2'>
                  <div className="flex items-center">
                    <a href="https://www.instagram.com/dbuglabs/" target='_blank' className="text-white font-bold hover:underline flex flex-row">@dbuglabs&nbsp;<img className='w-1.5 mb-1' src="src\components\ContactUs\Assets\link-arrow.svg" alt="Link" /> </a>
                  </div>
                  <div className=''>Follow @dbuglabs to get the latest news and updates.</div>
                </div>
              </div>
            
              <div className="flex flex-row items-start flex-1 w-25 mt-5 sm:max-w-60 lg:-mt-1 md:max-w-64">
                <div className="mt-0.5">
                  <img src="src\components\ContactUs\Assets\Mail.svg" alt="Email" className="w-12 min-[375px]:w-[30px] sm:w-7 md:w-10" />
                </div>
                <div className='pl-2 mr-3'>
                  <div className="flex items-center">
                    <a href="mailto:hello@dbuglabs.com" className="text-white font-bold hover:underline flex flex-row">hello@dbuglabs.com&nbsp;<img className='w-1.5 mb-1' src="src\components\ContactUs\Assets\link-arrow.svg" alt="Link" /> </a>
                  </div>
                  <div className=''>Have any queries or questions for dBugLabs? Contact us through our mail.</div>
                </div>
              </div>

              <div className="flex flex-row items-start flex-1 w-25 mt-5 lg:mt-0 sm:max-w-60">
                <div className="mt-0.5">
                  <img src="src\components\ContactUs\Assets\LinkedIn.svg" alt="LinkedIn" className="w-10 min-[375px]:w-[30px] sm:w-7 md:w-10" />
                </div>
                <div className='pl-2'>
                  <div className="flex items-center">
                    <a href="https://www.linkedin.com/company/dbug-labs" target='_blank'  className="text-white font-bold hover:underline flex flex-row">@Dbug Labs&nbsp;<img className='w-1.5 mb-1' src="src\components\ContactUs\Assets\link-arrow.svg" alt="Link" /> </a>
                  </div>
                  <div className=''>Thinking about becoming a resource or interested in joining us? Join the discussion.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
