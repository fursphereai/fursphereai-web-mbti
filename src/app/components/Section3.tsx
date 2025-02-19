import React, { useRef } from "react";
import './section.css';

const Section3 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      console.log(`Mouse entered video, playing...`);
      video.play();
    }
  };

  return (
    <section className="section">

      <div className="section-vedio-left">
            
        <video
          className="w-full h-full rounded-[10vw] object-cover"
          ref={videoRef}
          autoPlay
          loop={false}
          muted
          onMouseEnter={handleMouseEnter}
          style={{
            clipPath: "inset(1% 1% 1% 1%)",
          }}
        >
          <source src="/video/page2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          
      </div>

      {/* Text Content (Appears first on mobile, right on desktop) */}
      <div className="section-right">
        <h1 className="section-text text-right md:text-left md:text-[3vw] max-text-[48px] md:leading-[4vw]">
          Help you know{" "}
          <span className="md:text-[3vw] max-text-[48px] font-Ubuntu text-[#5777D0]">
            everything
          </span>{" "}
          <br />
          about your pet, even when
          <br />
          not at home.
        </h1>

        
        <button className="signup-button w-[74.5px] md:w-[111.75px] lg:w-[149px]">Subscribe</button>
      
      </div>

     
    </section>
  );
};

export default Section3;
