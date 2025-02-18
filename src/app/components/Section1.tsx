
import React,{ useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Section1 = () => {

const video1Ref = useRef<HTMLVideoElement | null>(null);
const [isPopupOpen, setIsPopupOpen] = useState(false); 

useEffect(() => {
    const interval = setInterval(() => {
      const video = video1Ref.current;
      if (video) {
        console.log("Playing video every 20 seconds...");
        video?.play(); // 播放视频
        setTimeout(() => {
          video.pause(); 
          console.log("Paused video on the last frame.");
        }, video.duration * 1000); 
      }
    }, 10000); // 每隔 20 秒触发一次

 
    return () => clearInterval(interval);
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
    <section className="relative  mt-[90px]  flex flex-col md:flex-row max-w-[1440px] aspect-[1440/640] bg-[#ffffff] mx-auto">
            {/* 左侧内容 */}
            <div className="flex flex-col  bg-black  items-center  w-1/2  aspect-[1440/640] object-cover">
            
            <video
                className="w-full max-w-[700px] aspect-[700/630] "
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
        <div className="flex flex-col bg-black text-left items-start  gap-y-[32px] w-1/2">
            
            <h1 className="text-[3.33vw] font-Ubuntu text-[#505D90] max-w-[447px]  leading-[5vw] mt-[12vh] ml-[5vw]">
                A pet concierge that<br />
                manages your pets <br /> 
                <span className="font-balooExtraBold text-[4.44vw] text-[#5777D0]">HEALTH</span>
            </h1>
            

            <div className="flex flex-row bg-black items-center w-[30.76vw] space-x-[1.555vw] ml-[5vw] ">
            
            {/* 左 */}
            <div className="flex items-center bg-black bg-gray-100 rounded-full shadow-md  w-[22.3vw] aspect-[321/50] max-w-[321px] ">
            <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-[0.9027vw]  outline-none text-gray-600 placeholder-gray-400 px-4"
            />
            <button 
                className="bg-custom-gradient text-white font-bold w-[9.17vw] aspect-[132/50] max-w-[132px] ml-[-9.17vw] rounded-full shadow-md transition duration-10 hover:brightness-75 h-full"
                onClick={handleOpenPopup}>
                <span className="text-[1.111vw] max-w-[79px]">Subscribe</span>
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
                    <h2 className="text-xl font-semibold mb-4">Success!</h2>
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
                <span className=" text-[0.9027vw] max-w-[38px] text-gray-600 whitespace-nowrap">or join</span>

                <Link href = 'https://discord.gg/676cBXbZhW'>
                <Image
                    src="/discord-icon.svg"
                    alt="Discord Icon"
                    width={50}
                    height={50}
                    className="w-[3.472vw] max-w-[50px] h-auto transition duration-10 hover:brightness-75"
                />
                </Link>
            
            </div>
            
            <div className="flex items-center space-x-[2vw]  ml-[5vw]">
            {/* <Link> */}
                <Image
                    src="/apple-logo.svg"
                    alt="Apple"
                    width={201}
                    height={59}
                    className="w-[20vw] max-w-[201px] h-auto transition duration-10 hover:brightness-75"
                />
                {/* </Link> */}
                {/* <Link> */}
                <Image
                    src="/google-logo.svg"
                    alt="Google"
                    width={201}
                    height={59}
                    className="w-[20vw] max-w-[201px] h-auto transition duration-10 hover:brightness-75"
                />
                {/* </Link> */}
            </div>
            </div>
    </section>
)
}

 export default Section1;

