import React, { useRef } from "react";
import Link from "next/link";
import './section.css';

const Section4 = () => {
  const videoRefs = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRefs.current;
    if (video) {
      console.log("Mouse entered video, playing...");
      video.play();
    }
  };

  return (
    <section className="section">
      {/* 左侧内容 */}
      <div className="section-left md:ml-[48px] lg:ml-[97px]">
        <h1 className="section-text text-[24px] md:text-[30px] lg:text-[48px] max-text-[48px] md:leading-[57.6px]">
          Convert medical records <br />
          into 
          <span className="text-[24px] md:text-[30px] lg:text-[48px] max-text-[48px] font-Ubuntu text-[#5777D0]">
          {" "}pet parent-friendly
          </span> <br />
          terms for easier understanding.
        </h1>

        {/* 按键 */}
      
          
        <button className="signup-button  w-[74.5px] md:w-[111.75px] lg:w-[149px]">
        <Link href="https://discord.gg/676cBXbZhW">
          Join Discord
        </Link>
        </button>
          
        
      </div>

      {/* 右侧内容 */}
      <div className="section-vedio">
        <video
          className="w-full h-full rounded-[10vw] object-cover"
          ref={videoRefs}
          autoPlay
          loop={false}
          muted
          onMouseEnter={handleMouseEnter}
          style={{ clipPath: "inset(1% 1% 1% 1%)" }}
        >
          <source src="/video/page3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Section4;
