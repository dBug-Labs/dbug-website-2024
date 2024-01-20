import React from 'react';

// Import your SVG images
import IdeateItImage from './assets/IdeateIt.svg';
import WireframingImage from './assets/Wireframing.svg';
import DesignItImage from './assets/designIt.svg';
import DevelopItImage from './assets/developIt.svg';
import TestItImage from './assets/testIt.svg';
import Arrow1 from './assets/Arrow 1.svg';
import Arrow2 from './assets/Arrow 2.svg';
import Arrow3 from './assets/Arrow 3.svg';
import Arrow4 from './assets/Arrow 4.svg';

const HowWeChange = () => {
  return (
    <div>
      <div className='w-full text-center flex flex-col justify-center'>
        <h1 className='text-[#CDCDCD] font-poppins font-bold text-6xl md:text-5xl lg:text-6xl p-10 w-1169 h-74'>How We Change Dreams Into Reality</h1>
        <p className='text-[#CDCDCD] font-poppins font-bold text-3xl md:text-2xl lg:text-3xl'>Everything begins with an idea and this is how the dbuglabs team diligently</p>
        <p className='text-[#CDCDCD] font-poppins font-bold text-3xl md:text-2xl lg:text-3xl'>carries out the steps to bring it into existence.</p>
      </div>
      <div className='p-10 flex flex-wrap'>
      
        {/* Ideate it (1) */}
        <div className='w-full md:w-1/2 lg:w-1/3'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl md:text-2xl lg:text-3xl pl-4 md:pl-6 lg:pl-11'>Ideate it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-2xl md:text-xl lg:text-2xl pl-4 md:pl-6 lg:pl-9 p-5'>
            <p className='text-left'>No one likes a canvas without paint, and nor do we. Giving a life to the wire-frame is our job, and designing only makes it easier.</p>
            <img src={IdeateItImage} alt="Ideate It" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={Arrow1} alt='Arrow1' className='hidden md:block mx-6 h-[603px] w-[400px]'/> {/* Adjusted spacing and added mx-6 */}
        
        <img src={Arrow2} alt='Arrow2' className='hidden md:block mx-6 '/> {/* Adjusted spacing and added mx-6 */}
        </div>
        {/* Wireframe it (2) */}
        <div className='hidden md:block w-full md:w-1/2 lg:w-1/3 mt-20 mr-auto pl-4 md:pl-6 lg:pl-10'>
  <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl md:text-2xl lg:text-3xl'>Wireframe it!</h1>
  <div className='text-[#CDCDCD] font-poppins font-semibold text-2xl md:text-xl lg:text-2xl p-5'>
    <p className='text-left'>From segregating the thoughts to making sure they serve their purpose, a proper structure and layout are formed. This is what turns our ideas into the first draft.</p>
    <img className='object-right' src={WireframingImage} alt="Wireframing" />
  </div>
</div>
       
        {/* Design it (3) */}
        <div className='w-full md:w-1/2 lg:w-1/3 mt-20'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl md:text-2xl lg:text-3xl pr-4 mb-4 md:pr-6 lg:pr-10'>Design it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-2xl md:text-xl lg:text-2xl pl-4 md:pl-6 lg:pl-9 p-5'>
            <p className='text-left'>No one likes a canvas without paint, and nor do we. Giving a life to the wire-frame is our job, and designing only makes it easier.</p>
            <img src={DesignItImage} alt="Design It" />
          </div>
        </div>
          
        <img src={Arrow3} alt='Arrow3' className='hidden md:block mx-6'/> {/* Adjusted spacing and added mx-6 */}

        {/* Develop it (4) */}
        <div className='hidden md:block w-full md:w-1/2 lg:w-1/3 mt-20'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl md:text-2xl lg:text-3xl pr-4 mb-4 md:pr-6 lg:pr-10'>Develop it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-2xl md:text-xl lg:text-2xl pl-4 md:pl-6 lg:pl-9 p-5'>
            <p className='text-right'>We got the “Bob the Builder” mindset to fix any problems or obstacles and are always open to learning from mistakes.</p>
            <img src={DevelopItImage} alt="Develop It" />
          </div>
        </div>

        <img src={Arrow4} alt='Arrow4' className='hidden md:block mx-6'/> {/* Adjusted spacing and added mx-6 */}

        {/* Test it (5) */}
        <div className='w-full md:w-1/2 lg:w-1/3 mt-20'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl md:text-2xl lg:text-3xl pr-4 mb-4 md:pr-6 lg:pr-10'>Test it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-2xl md:text-xl lg:text-2xl pl-4 md:pl-6 lg:pl-9 p-5'>
            <p className='text-right'>Debugging is what we are skilled at, and we ensure that the code is bug-free before delivering it. We are always open to customizations, modifications, restructuring, and prioritize the quality of our work.</p>
            <img src={TestItImage} alt="Test It" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeChange;