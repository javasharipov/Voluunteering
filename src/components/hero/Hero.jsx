import React from 'react';
import heroBg from '../../assets/herobg.svg';
import play from '../../assets/play.svg';
import lineimage from '../../assets/Line.svg';



const Hero = () => {
  return (
    <section className="relative h-screen">
      <img
        id="hero-image"
        className="w-full h-full object-cover"
        src={heroBg}
        alt="hero background image"
      />
      <div className="translate-x-[-320px] translate-y-[-100px] container mx-auto max-w-[1280px] w-[690px] absolute inset-0 flex flex-col justify-center items-start text-white px-4">
        <h2 className="leading-[76.8px]  text-4xl md:text-6xl font-bold mb-6">
          Save the environment today for a better tomorrow
        </h2>
        <div className="flex gap-4">
          <button className="px-[32px] py-[16px] bg-white text-black font-medium rounded shadow-md text-[16px] hover:bg-gray-100">
            What we do
          </button>
          <button className="px-[32px] py-[16px] text-[16px] font-medium bg-transparent">
           <img className='inline-block mr-1.5' src={play} alt="play" /> Play Video
          </button>
        </div>
      </div>
      <div className="pb-[20px] absolute bottom-0 left-10 right-0 flex items-center justify-between text-white px-6 py-4 text-[16px] font-medium">
        <p>23,800 trees planted</p>
        <img className='w-[1000px]' src={lineimage} alt="line image" />
        <p>5840 donations collected</p>
      </div>
    </section>
  );
};

export default Hero;
