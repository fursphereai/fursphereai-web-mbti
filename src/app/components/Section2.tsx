
import React,{ useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Section2 = () => {

const videoRefs = useRef<HTMLVideoElement | null>(null);


const handleMouseEnter = (index: number) => {
    const video = videoRefs.current;
    if (video) {
      console.log(`Mouse entered video ${index + 1}, playing...`);
      video?.play();
    }
};


return (
    <section className="flex flex-row justify-center max-w-screen-2xl aspect-[1440/640] mx-auto bg-[#ffffff]">
       {/* 左侧内容 */}
       <div className="flex flex-col mt-20 ml-20 items-start w-1/2 h-100 text-left space-y-10">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-Ubuntu text-[#505D90] w-3/4 leading-snug">
           Compare prices across<br />
           <span className="text-4xl md:text-5xl lg:text-6xl font-Ubuntu text-[#5777D0]">10+</span> stores best pet  <br />
           supplies.
          </h1>
          

    
          
          <div className="flex items-center bg-gray-100 rounded-full shadow-md  max-w-lg w-40 h-16">
          <button className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md transition duration-10 hover:brightness-75 w-full h-full">
            Sign Up
          </button>
          </div>

            
        </div>
          
      {/* 右侧内容 */}
      <div className="flex flex-col  items-center w-full lg:w-1/2">
        

        <div className="w-full ">
         
          <video
            className="w-full rounded-[200px] "
            ref={videoRefs}
            autoPlay
            loop = {false}
            muted
            onMouseEnter={() => handleMouseEnter(0)} 
            style={{
              clipPath: "inset(1% 1% 1% 1%)", 
            }}
          >
            <source src="/video/page1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
        </div>
        </div>
     </section>
)
}

 export default Section2;

