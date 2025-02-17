import React, { useRef } from "react";
import Link from "next/link";

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
    <section className="flex flex-col md:flex-row max-w-[1440px] mx-auto bg-[#ffffff] items-center px-[5vw] md:px-[2vw] py-[5vh] md:py-[10vh] space-y-10 md:space-y-0">
      {/* 左侧内容 */}
      <div className="flex flex-col text-left w-full md:w-1/2 space-y-[32px]">
        <h1 className="text-[3.33vw] font-UbuntuLight text-[#505D90] max-w-[447px] leading-[5vw] tracking-[-0.04em]">
          Convert medical records <br />
          into <span className="font-balooExtraBold text-[4.44vw] bg-gradient-to-t from-[#AFBFE9] via-[#5777D0] to-[#AFBFE9] bg-clip-text text-transparent">
            pet parent-friendly
          </span> <br />
          terms for easier understanding.
        </h1>

        {/* 按键 */}
        <Link href="https://discord.gg/676cBXbZhW">
          <div className="
            flex items-center
            bg-gray-100
            rounded-full shadow-md
            w-[30.76vw] max-w-[321px]
            aspect-[321/50]
            transition duration-300 hover:brightness-90
          ">
            <button className="
              bg-custom-gradient
              text-white font-bold
              rounded-full
              w-full h-full
              text-[1.111vw] max-w-[79px]
            ">
              Join Discord
            </button>
          </div>
        </Link>
      </div>

      {/* 右侧内容 */}
      <div className="flex w-full md:w-1/2 justify-center">
        <video
          className="relative w-full max-w-[700px] aspect-[700/630]"
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
