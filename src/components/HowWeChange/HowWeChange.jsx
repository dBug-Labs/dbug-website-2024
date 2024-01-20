import React from 'react';

// Import your SVG images
import IdeateItImage from './assets/IdeateIt.svg';
import WireframingImage from './assets/Wireframing.svg';
import DesignItImage from './assets/designIt.svg';
import DevelopItImage from './assets/developIt.svg';
import TestItImage from './assets/testIt.svg';
import Arrow1  from './assets/Arrow 1.svg';

const HowWeChange = () => {
  return (
    <div>
      <div className='w-full text-center flex flex-col justify-center'>
      <div className="How we heading" style={{width: 1169, height: 74, textAlign: 'center', color: '#CDCDCD', fontSize: 60, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>How We Change <span class="bg-gradient-to-r from-blue-600">Dreams</span> into Reality </div>
       
        <p className='text-[#CDCDCD] font-poppins font-bold text-3xl'>Everything begins with an idea and this is how the dbuglabs team diligently</p>
        <p className='text-[#CDCDCD] font-poppins font-bold text-3xl'>carries out the steps to bring it into existence.</p>
      </div>
      <div className='p-10 flex flex-wrap'>
        
        {/* Ideate it (1) */}
        <div className='w-full md:w-1/3 lg:w-1/2'>
          <h1 className=''> Ideate it!</h1>
          
          
          <div class=" w-72 h-48 text-stone-300 text-lg font-semibold font-['Poppins']"><br/>Let your delulu picture your idea and watch it turn into something captivating. Watch us brainstorm and reject 100 different ideas only to come up with the 101th perfect idea. <br/><br/><br/></div>
            <img src={IdeateItImage} alt="Ideate It" />
            <img src={Arrow1} alt="Ideate It" />
          </div>
       

        {/* Wireframe it (2) */}
        <div className='hidden md:block w-full md:w-1/3 lg:w-1/2 mt-20'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl pr-10 pl-35px'>Wireframe it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-20xl p-5'>
          <div class="FromSegregatingTheThoughtsToMakingSureTheyServeTheirPurposeAProperStructureAndLayoutIsFormedThisIsWhatTurnsOurIdeasIntoTheFirstDraft w-72 h-48 text-stone-300 text-lg font-semibold font-['Poppins']">From segregating the thoughts to making sure they serve their purpose, a proper structure and layout is formed. This is what turns our ideas into the first draft.</div>
            <img className='object-right'src={WireframingImage} alt="Wireframing" />
          </div>
        </div>
            
        {/* Design it (3) */}
        <div className='w-full md:w-1/3 lg:w-1/2'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl pr-10 mb-'>Design it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-20xl pl-9 p-5'>
          <div className="NoOneLikesACanvas...." style={{width: 304, height: 197, color: '#CDCDCD', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>No one likes a canvas without paint and nor do we. Giving a life to the wire-frame is our job and designing only makes it easier. <br/></div>
            <img src={DesignItImage} alt="Design It" />
          </div>
        </div>

        {/* Develop it (4) */}
        <div className='hidden md:block w-full md:w-1/3 lg:w-1/2'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl pr-10 mb-'>Develop it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-20xl pl-9 p-5'>
          <div className="WeGotbob...." style={{width: 304, height: 197, color: '#CDCDCD', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>We got the “Bob the Builder” mindset to fix any problems or obstacles and are always open to learning from mistakes.</div>
            <img src={DevelopItImage} alt="Develop It" />
          </div>
        </div>

        {/* Test it (5) */}
        <div className='w-full md:w-1/3 lg:w-1/2'>
          <h1 className='text-[#CDCDCD] font-poppins font-bold text-3xl pr-10 mb-'>Test it!</h1>
          <div className='text-[#CDCDCD] font-poppins font-semibold text-20xl pl-9 p-5'>
          <div className="DebuggingIs...." style={{width: 268, height: 197, color: '#CDCDCD', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Debugging is what we are skilled at and we ensure that the code is bug-free before delivering it. We are always open to customizations, modifications, restructuring and prioritize the quality of our work.</div>
            <img src={TestItImage} alt="Test It" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeChange;
