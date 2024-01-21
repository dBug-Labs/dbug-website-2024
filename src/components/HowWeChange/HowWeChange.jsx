// fix heading

// adjust accordingly

import React from "react";

// Import your SVG images
import IdeateItImage from "/AssetsHowWeChange/IdeateIt.svg";
import WireframingImage from "/AssetsHowWeChange/Wireframing.svg";
import DesignItImage from "/AssetsHowWeChange/designIt.svg";
import DevelopItImage from "/AssetsHowWeChange/developIt.svg";
import TestItImage from "/AssetsHowWeChange/testIt.svg";
import Arrow1 from "/AssetsHowWeChange/Arrow 1.svg";
import Arrow2 from "/AssetsHowWeChange/Arrow 2.svg";
import Arrow3 from "/AssetsHowWeChange/Arrow 3.svg";
import Arrow4 from "/AssetsHowWeChange/Arrow 4.svg";
import mArrow1 from "/AssetsHowWeChange/m Arrow 1.svg";

const Card = (props) => {
  return (
    <div className="flex flex-col max-w-[304px] gap-4 text-[#CDCDCD] font-poppins">
      <h1 className="md:text-3xl sm:text-lg font-bold">{props.head}</h1>
      <p className="md:text-lg sm:text-sm font-semibold w-[8rem] md:w-auto">{props.text}</p>
      <img className={props.imageWidth} src={props.imagePath} alt="" />
    </div>
  );
};

const HowWeChange = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12 mb-12 text-[#CDCDCD] font-poppins">
  <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-[#CDCDCD] font-bond font-poppins font-bold text-center">How We Change <span className=" font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to top, #727272, white)' }}>Dreams</span> into Reality</h1>
  <h2 className="lg:text-3xl md:text-2xl sm:text-lg text-center lg:line-clamp-2 text-[#CDCDCD] font-bold font-poppins pt-5 lg:px-10">
    Everything begins with an idea and this is how the dbuglabs team diligently 
  
    carries out the steps to bring it into existence.
  </h2>
</div>

      <div className="flex justify-center mb-20 mx-5">
        <div className="flex flex-col gap-32 text-xs ">
          {/* first column */}

          {/* 1st card col */}
          <Card
            head="Ideate it!"
            text="
          Let your delulu picture your idea and watch it turn into something captivating.
           Watch us brainstorm and reject 100 different 
           ideas only to come up with the 101th perfect idea."
            imagePath={IdeateItImage}
            imageWidth={"220px"}
          ></Card>

          <Card
            head="Design it!"
            text="No one likes a canvas without paint and nor do we. Giving a life to the wire-frame
           is our job and designing only makes it easier."
            imagePath={DesignItImage}
          ></Card>

          <Card
            head="Test it!"
            text="Debugging is what we are skilled at and we ensure that the code is bug-free before delivering it.
           We are always open to customizations, modifications, restructuring and prioritize the quality of our work."
            imagePath={TestItImage}
          ></Card>
        </div>

        {/* arrow column */}

        <div className="flex flex-col mt-96 gap-24">
          {/* arrow */}
          <img src={Arrow1} className="w-[400px] hidden md:block" alt="" />
          <img src={Arrow2} className="md:w-[300px]  ml-10 mt-12 lg:scale-x-100 sm:scale-x-90 hidden md:block" alt="" />
          <img src={Arrow3} className="md:w-[260px] mt-32 ml-10  lg:scale-x-100 sm:scale-x-90 hidden md:block" alt="" />
          <img src={Arrow4} className="md:w-[300px] ml-10 mt-1 lg:scale-x-100 sm:scale-x-90 hidden md:block" alt="" />
          <img src={mArrow1} className="md:hidden w-[400px] ml-1 mt-10 sm:scale-x-100 " alt="" />
        </div>

        {/* 3rd column */}

        <div className="flex flex-col mt-52 gap-60">
          {/* 3rd card col */}
          <Card
            head="Wireframe it!"
            text="From segregating the thoughts to making sure they serve their purpose,
          a proper structure and layout is formed. This is what turns our ideas into the first draft."
            imagePath={WireframingImage}
          ></Card>{" "}
          <Card
            head="Develop it!"
            text="We got the “Bob the Builder” mindset to fix any problems or obstacles and are always open to learning from mistakes."
            imagePath={DevelopItImage}
          ></Card>
        </div>
      </div>
    </>
  );
};

export default HowWeChange;