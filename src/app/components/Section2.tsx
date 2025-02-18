import React, { useRef } from "react";

const Section2 = () => {
    const videoRefs = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = () => {
        if (videoRefs.current) {
            videoRefs.current.play();
        }
    };

    return (
        <section className="flex flex-col lg:flex-row justify-between items-center max-w-screen-2xl mx-auto bg-[#ffffff] px-6 md:px-12 lg:px-20 py-12 gap-x-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col items-start w-full lg:w-[45%] text-left space-y-6 min-w-0">
                <h1 className="text-[clamp(24px,5vw,48px)] font-Ubuntu text-[#505D90] leading-snug">
                    Compare prices across <br />
                    <span className="text-[clamp(28px,6vw,56px)] font-Ubuntu text-[#5777D0]">
                        10+
                    </span>{" "}
                    stores best pet <br />
                    supplies.
                </h1>

                <div className="flex justify-start w-full">
                    <button className="signup-button">Sign up</button>
                </div>
            </div>

            {/* Right Side - Video with Adjusted Position */}
            <div className="flex justify-center lg:justify-end w-full lg:w-[55%] min-w-0 mt-100 lg:mt-0 relative ml-12 sm:ml-16 lg:ml-0">
              
                <video
                    className="w-full h-full rounded-[10vw] object-cover"
                    ref={videoRefs}
                    autoPlay
                    loop
                    muted
                    onMouseEnter={handleMouseEnter}
                    style={{
                        clipPath: "inset(1% 1% 1% 1%)",
                    }}
                >
                    <source src="/video/page1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default Section2;
