import React, { useRef } from "react";
import './section.css';

const Section2 = () => {
    const videoRefs = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = () => {
        if (videoRefs.current) {
            videoRefs.current.play();
        }
    };

    return (
        <section className="section">
            {/* Left Side - Text Content */}
            <div className="section-left">
                <h1 className="section-text md:text-[3vw] max-text-[48px] md:leading-[4vw]">
                    Compare prices across <br />
                    <span className="md:text-[3vw] max-text-[48px] font-Ubuntu text-[#5777D0]">
                    10+
                    </span> stores best pet <br />
                    supplies.
                </h1>
                <button className="signup-button w-[74.5px] md:w-[111.75px] lg:w-[149px]">Sign up</button>
              
            </div>

            {/* Right Side - Video with Adjusted Position */}
            <div className="section-vedio">
              
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
