
import React,{ useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import './section.css';

const Section1 = () => {

    const video1Ref = useRef<HTMLVideoElement | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const textSequence = ["HEALTH", "FOOD", "DAILY LIVES"];
    const [displayText, setDisplayText] = useState(textSequence[0]);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        // Video playback control
        const videoInterval = setInterval(() => {
            const video = video1Ref.current;
            if (video) {
                console.log("Playing video every 20 seconds...");
                video.play();

        setTimeout(() => {
            video.pause();
            console.log("Paused video on the last frame.");
            }, video.duration * 1000);
      }
    }, 20000); // Play video every 20 seconds

    // Text cycling logic (every 5 seconds)
    let textIndex = 0;
    const textInterval = setInterval(() => {
        setFade(false); // Start fade-out effect
          setTimeout(() => {
                textIndex = (textIndex + 1) % textSequence.length;
                setDisplayText(textSequence[textIndex]);
                setFade(true); // Start fade-in effect
                }, 2000);// Adjust the transition time here
            },3000);// Faster cycle: 4s visible + 1.5s transition


    // Cleanup intervals on unmount
    return () => {
      clearInterval(videoInterval);
      clearInterval(textInterval);
    };
  }, []);


 // 打开弹窗
const handleOpenPopup = () => {
  setIsPopupOpen(true);
};

  // 关闭弹窗
const handleClosePopup = () => {
  setIsPopupOpen(false);
};

return (
    <section className="

    mt-[70px] sm:mt-[80px] md:mt-[100px]
    items-center
    flex flex-col md:flex-row
    max-w-[1440px]
    max-h-[640px]
    aspect-[1440/640]
    bg-[#ffffff]
    mx-auto
    ">

            {/* 左侧内容 */}
            <div className="flex flex-col
            items-center
            w-full md:w-1/2
            aspect-[1440/640]
            object-cover">
            
            <video
                className="relative 
                w-[72vw] md:w-full
                max-w-[700px] 
                aspect-[700/630]"
                ref = {video1Ref}
                autoPlay
                loop = {false}
                muted
                style={{
                clipPath: "inset(1% 1% 1% 1%)",
                }}
            >
                <source src="/video/landing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            </div>
            

        {/* 右侧内容 */}
        <div className="
      
        items-center
        flex flex-col
        text-left
        gap-y-[20px] lg:gap-y-[32px]
        w-full md:w-1/2
        md:items-start">


            <h1 className="
                text-[24px] md:text-[36px] lg:text-[48px]
                font-UbuntuLight
                text-[#505D90]
                lg:w-[447px] max-w-[480px]
                text-center md:text-left
                md:leading-[48.8px] lg:leading-[57.6px]
                tracking-[-0.04em]
                md:ml-[45px] lg:ml-[80px]">
                A pet concierge that<br />
                manages your pets’ <br />
                <span className="font-balooExtraBold
                text-[32px] md:text-[48px] lg:text-[64px]
                bg-gradient-to-t
                from-[#AFBFE9]
                via-[#5777D0]
                to-[#AFBFE9]
                bg-clip-text
                text-transparent
                ">
                {displayText} </span>
            </h1>
            

            <div className="
          
            flex flex-row
            items-center
            w-[250.76px] md:w-[443px]
            space-x-[10px] md:space-x-[9px] lg:space-x-[12px]
            md:ml-[45px] lg:ml-[80px] ">
            
            {/* 左 */}
            <div className=" flex items-center
             bg-[#E8EBF6]
             rounded-full
             shadow-md
             w-[260px] md:w-[260px] lg:w-[321px]
             aspect-[321/50]
             max-w-[321px] ">

            <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent 
                text-[9.33px] md:text-[13px]
                outline-none
                text-gray-600
                placeholder-gray-400
                px-4"
            />
            <button 
                className="bg-custom-gradient
                 text-white
                 font-[700]
                 w-[73.92px] md:w-[100px] lg:w-[132px]
                 aspect-[132/50]
                 max-w-[132px]
                 ml-[-9.17vw]
                 rounded-full
                 shadow-md
                 flex items-center justify-center
                 transition
                 duration-10
                 hover:brightness-75
                 h-full"
                onClick={handleOpenPopup}>
                <span className="
                text-[9.33px] md:text-[13px] lg:text-[16px]
                max-w-[132px]">
                Subscribe</span>
            </button>

            {/* 弹窗 */}
            {isPopupOpen && (
                <div
                className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 
                    transition-opacity duration-300 ease-in-out ${
                    isPopupOpen ? "opacity-100" : "opacity-0"
                    }`}
                >
                <div
                    className={`bg-white rounded-3xl p-8 shadow-lg max-w-md w-full transform transition-transform duration-300 ease-in-out 
                    ${isPopupOpen ? "scale-100" : "scale-90"}`}
                >
                    <h2 className="text-xl
                     font-semibold
                     text-[#505D90]
                     mb-4">
                     Success!</h2>

                    <p className="text-gray-600 mb-6">
                    Please check your email address for additional instructions
                    </p>
                    <div className="flex justify-end">
                    <button
                        onClick={handleClosePopup}
                        className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-500"
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            )}
            </div>

                {/* 右 */}
                <span className=" relative
                text-[8px] md:text-[11px] lg:text-[13px]
                max-w-[38px]
                text-[#A4AAC2]
                whitespace-nowrap">
                 or join</span>

                <Link href = 'https://discord.gg/676cBXbZhW'>
                <Image
                    src="/discord-icon.svg"
                    alt="Discord Icon"
                    width={50}
                    height={50}
                    className="w-[28px] md:w-[41px] lg:w-[50px] max-w-[50px] h-auto transition duration-10 hover:brightness-75"
                />
                </Link>
            
            </div>
            
            <div className="
            flex 
            items-center 
            space-x-[25px] lg:space-x-[31px]
            md:w-[300px] lg:w-[433px] 
            md:ml-[45px] lg:ml-[80px]">
            {/* <Link> */}
                <Image
                    src="/apple-logo.svg"
                    alt="Apple"
                    width={201}
                    height={59.21}
                    className="h-auto transition duration-300 hover:brightness-75
                               w-[116px] md:w-[160px] lg:w-[201px]"
                />
                {/* </Link> */}
                {/* <Link> */}
                <Image
                    src="/google-logo.svg"
                    alt="Google"
                    width={201}
                    height={59.21}
                    className=" h-auto transition duration-300 hover:brightness-75,
                                w-[116px] md:w-[160px] lg:w-[201px]"
                />
                {/* </Link> */}
            </div>
            </div>
    </section>
)
}

 export default Section1;
