import React, { useState, useEffect } from 'react';
import heroSecDesk from '/heroSecDesk.svg';
import heroSecMob from '/heroSecMob.svg';

export default function HeroPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    
    handleResize();

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <img src="/bg-lines.svg" className='lg:absolute lg:block hidden top-60 left-[10%]' alt="" />
        <img src="/bg-lines-mob.svg" className='lg:hidden absolute top-20 left-[10%]' alt="" />
      <div className="flex items-center justify-center h-screen">
        <div className="flex-1 text-center pb-18">
          <h1 className={`${isMobile ?  "text-center font-bold text-4xl md:text-5xl ml-10 pb-8 pr-10": 'text-center pb-16 font-bold text-4xl md:text-5xl ml-10'}`} style={{ color: 'white' }}>
            the 24/7 <span className="text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to top, rgb(22, 22, 22), rgb(152, 152, 152))' }}>debugging</span> community
          </h1>
          <div className={`w-auto ${isMobile ? 'pl-4 pr-2 ml-4 mr-4' : 'pl-8 pr-6 ml-48 mr-48'}`}>
            <p className={`${isMobile ?  "text-justify": 'text-center'}`} style={{ color: 'rgb(103, 103, 103)' }}>
              <span className='text-white font-bold'>Found a bug?</span> You came to the right place to fix it. We are a <span className='text-white font-bold'>team</span> that wants to make a
              {/* <span className='text-white font-bold'> big change</span> in the ever-changing programming and software development world. */}
            </p>
            
            <button className='mt-16 border-slate-800 border rounded-xl pt-2 pr-10 pl-10 pb-2' style={{ color: 'rgb(176, 176, 176)' }}>
              Know more about us
            </button>
            <img className='mx-auto pt-1' src='npx.svg'/>
            {isMobile && (
              <img className='pt-14' src={heroSecMob} alt='Hero Image' />
            )}
          </div>
        </div>
        <div className="mr-0 flex items-center">
          {!isMobile && (
            <img src={heroSecDesk} alt='Hero Image' className="text-gray-500" />
          )}
        </div>
      </div>
      {!isMobile && (
        <p className ='flex items-center pl-10 pb-8 ' style={{ color: 'rgb(176, 176, 176)' }}>
          Contribute to dbuglabs.com <img src='weed.svg'/>
        </p>
      )}
    </>
  );
}