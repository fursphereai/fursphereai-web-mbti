import React, { useRef } from "react";

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
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-screen-2xl mx-auto bg-[#ffffff] px-6 md:px-12 lg:px-20 py-12 gap-x-16">
      {/* Text Content (Appears first on mobile, right on desktop) */}
      <div className="flex flex-col items-start w-full lg:w-[45%] text-left space-y-6 min-w-0 order-1 lg:order-2">
        <h1 className="text-[clamp(24px,5vw,48px)] font-Ubuntu text-[#505D90] leading-snug">
          Help you know{" "}
          <span className="text-[clamp(28px,6vw,56px)] text-[#5777D0]">
            everything
          </span>{" "}
          <br />
          about your pet, even when
          <br />
          not at home.
        </h1>

        <div className="flex justify-start w-full">
          <button className="signup-button">Subscribe</button>
        </div>
      </div>

      {/* Video (Appears below text in mobile, left in desktop) */}
      <div className="flex justify-start lg:justify-end w-full lg:w-[55%] min-w-0 mt-8 lg:mt-0 relative -ml-12 sm:-ml-16 lg:ml-0">
        <div className="w-full aspect-video">
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
      </div>
    </section>
  );
};

export default Section3;
