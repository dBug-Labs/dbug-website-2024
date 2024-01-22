import React, { useState } from 'react';
 

function Card3({
    heading,
    description,
    thumbnailSrc,
    thumbnailAlt = "Thumbnail",
    className,
  }) {
    return (
      <div className={`w-[290px] m-5 shadow-xl shadow-gray-600 md:h-[820px] lg:h-[550px] justify-center border border-solid border-slate-900 py-2 px-0 flex-auto rounded-[45px] p-8 mx-[10px] md:mx-3 md:justify-center `}>
        <div className="overflow-hidden rounded-lg h-64  flex items-center justify-center">
          <img
            className=" max-w-full max-h-full  rounded-lg "
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div >
        <h3 className="pt-5 p-4 text-white font-semibold text-2xl ">
          {heading}
        </h3>
        <p className=" p-4 cursor-pointer duration-300 transition text-[#CDCDCD] text-base font-normal -mt-2">
          {description}
        </p>
      </div>
    );
  }

  const Domain = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const cardSets = [
      [
        {
          heading: `App Development`,
          thumbnailSrc: `/AssestsDomain/pic1.png`,
          description: `Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process.`,
        },
        {
          heading: `Web Development`,
          thumbnailSrc: `/AssestsDomain/pic2.png`,
          description: `Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. `,
        },
        {
          heading: `Machine Learning`,
          thumbnailSrc: `/AssestsDomain/pic3.png`,
          description: `Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights.`,
        },
      ],
      [
        {
          heading: `User Interface And User Experience`,
          thumbnailSrc: `/AssestsDomain/pic4.png`,
          description: `This is the team that ensures utmost customer satisfaction with their creative and vibrant designs. They tend to work for a streamlined experience for both the club members as well as the audience. They are responsible for the design, layout and overall user interaction with the club’s digital platforms.`,
        },
        {
          heading: `VFX And GFX`,
          thumbnailSrc: `/AssestsDomain/pic5.png`,
          description: `Step into the vibrant world of the gfx/vfx domain which thrives on pushing the boundaries of creativity and captivates the audience with its impactful work. Our mission is to ignite fascination and prove that the perfect blend of visuals and creativity can truly bring about meaningful change. `,
        },
        {
          heading: `Content Writing`,
          thumbnailSrc: `/AssestsDomain/pic6.png`,
          description: `In a domain full of Shakespeare and JK Rowling, we promote creative ways of portraying our ideas. With exceptional talent and unwavering dedication to innovation, we look forward to bridging the gap between our club and the audience `,
        },
      ],
      [
        {
          heading: `Sponsership AND Marketing`,
          thumbnailSrc: `/AssestsDomain/pic7.png`,
          description: `Meet our stellar sponsorship squad, the force fueling our club. Composed of a top-notch team filled with exceptionally skilled individuals who imply a tactical approach to steadily form significant alliances, cultivate connections, and secure assistance, guiding us towards continuous growth and success.      `,
        },
        {
          heading: `Public Relations`,
          thumbnailSrc: `/AssestsDomain/pic8.png`,
          description: `Meet the voice of the club, who serve their role as the dynamic powerhouse of the club. Consisting of extremely bold candidates, the PR domain preserves the club's reputation. From fostering connections to maintain the liveliness amongst the members they excel in managing every component seamlessly. `,
        },
        {
          heading: `Events`,
          thumbnailSrc: `/AssestsDomain/pic9.png`,
          description: `To ignite the fun in all of us and promote educational yet insightful events, we have the creative Events team that makes knowledge meet enthusiasm. They ensure the seamless operation of an event assuring a flawless workflow. They thrive for the utmost precision and perfection. 
        `,
        },
      ],
    ];


  const handleSetChange = (setIndex) => {
    setCurrentSet(setIndex);
  };

  return (
    <>
    <img src="/AssestsDomain/bg-lines.svg" className='lg:absolute lg:block hidden top-[94rem] left-[75%]' alt="" />
    <div className='flex items-center justify-center md:flex md:justify-center md:pl-5 mt-10'>
      <h1 className=' text-white font-Poppins  font-bold p-2 xl:text-6xl text-4xl '>Our </h1>
      <h1 className='text-white font-Poppins font-bold p-2 xl:text-6xl text-4xl '><span className="xl:text-6xl text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to top, rgb(22, 22, 22), rgb(152, 152, 152))' }}>Domains</span> </h1>
      </div>
    <div className=''>
<div className='flex justify-center'>
       <div className=" mt-4  text-white/65 flex py-2 px-2 justify-center items-center rounded-full bg-gray-300 bg-opacity-20 max-w-[400px] my-4">
        <button onClick={() => handleSetChange(0)} className=' mx-2 py-1 cursor-pointer  focus:underline underline-offset-4  md:basis-1/3'>Technical</button>
        <button onClick={() => handleSetChange(1)} className=' py-1 mx-2 cursor-pointer focus:underline underline-offset-4 md:basis-1/3'>Creatives</button>
        <button onClick={() => handleSetChange(2)} className=' py-1 mx-2 cursor-pointer  focus:underline underline-offset-4 md:basis-1/3'>Corporate</button>
      </div>
</div>

      <div className=" mt-14 card-container flex flex-col md:flex-row md:px-3 items-center md:items-start md:mx-0" style={{ color: 'rgb(152, 152, 152)' }}>
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
    </>
  );
        }

export default Domain;
