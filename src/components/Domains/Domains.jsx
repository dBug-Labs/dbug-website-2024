import React, { useState } from 'react';
 

function Card3({
    heading,
    description,
    thumbnailSrc,
    thumbnailAlt = "Thumbnail",
    className,
  }) {
    return (
      <div className={`w-[290px] m-5  shadow-2xl shadow-gray-500 h-auto justify-center border border-solid border-slate-600 py-2 px-0 flex-auto rounded-[45px] p-8 mx-[10px] sm:mx-10 sm:justify-center `}>
        <div className="overflow-hidden rounded-lg h-64  flex items-center justify-center">
          <img
            className=" max-w-full max-h-full  rounded-lg "
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div >
        <h3 className="pt-5 p-4 text-white text-2xl ">
          {heading}
        </h3>
        <p className=" p-4 cursor-pointer duration-300 transition text-[#CDCDCD] font-Poppins text-base font-semibold  mt-2">
          {description}
        </p>
      </div>
    );
  }

  const Domain = () => {
    const [currentSet, setCurrentSet] = useState(0);
  const cardSets = [
    [{
      heading : `App Development`,
      thumbnailSrc : `/AssestsDomain/pic1.png`,
      description : `Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process.`
    },
    {
      heading : `Web Development`,
      thumbnailSrc : `/AssestsDomain/pic2.png`,
      description : `Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. `
    },
    {
      heading : `Machine Learning`,
      thumbnailSrc : `/AssestsDomain/pic3.png`,
      description : `Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights.` 
    }],
    [
    {
      heading : `USER INTERFACE AND USER EXPERIENCE`,
      thumbnailSrc : `/AssestsDomain/pic4.png`,
      description : `Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process.`
    },
    {
      heading : `VFX AND GFX`,
      thumbnailSrc : `/AssestsDomain/pic5.png`,
      description : `Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. `
    },
    {
      heading : `CONTENT WRITING`,
      thumbnailSrc : `/AssestsDomain/pic6.png`,
      description : `Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights. `
    },],
    [
    {
      heading : `SPONSORSHIP AND MARKETING`,
      thumbnailSrc : `/AssestsDomain/pic7.png`,
      description : `Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process.`
    }, 
    {
      heading : `PUBLIC REALTION`,
      thumbnailSrc : `/AssestsDomain/pic8.png`,
      description : `Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. `
    },
    {
      heading : `EVENTS`,
      thumbnailSrc : `/AssestsDomain/pic9.png`,
      description : `Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights. `
    }],
  ]


  const handleSetChange = (setIndex) => {
    setCurrentSet(setIndex);
  };

  return (
    <div className=''>

       <div className=" mt-4  text-white/65 ml-[5px] flex py-2 px-2 justify-center items-center rounded-xl bg-gray-300 bg-opacity-20 max-w-[400px] my-4 md:ml-[150px] lg:ml-[315px] xl:ml-[515px] ">
        <button onClick={() => handleSetChange(0)} className=' mx-2 py-1 cursor-pointer  focus:underline underline-offset-4  sm:basis-1/3'>Technical</button>
        <button onClick={() => handleSetChange(1)} className=' py-1 mx-2 cursor-pointer focus:underline underline-offset-4 sm:basis-1/3'>Creatives</button>
        <button onClick={() => handleSetChange(2)} className=' py-1 mx-2 cursor-pointer  focus:underline underline-offset-4 sm:basis-1/3'>Corporate</button>
      </div>

      <div className="  mt-14 card-container flex flex-col  sm:flex-row sm:px-7 sm:justify-center sm:ml-3 " style={{ color: 'rgb(152, 152, 152)' }}>
        {cardSets[currentSet].map((card, index) => (
          <Card3 
            key={index}
            className="bg-[#000000] mt-10"
            heading={card.heading}
            description={card.description}
            thumbnailSrc={card.thumbnailSrc}
          />
        ))}
      </div>

      
    </div>
  );
        }

export default Domain;
