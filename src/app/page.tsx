"use client";

import React,{ useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Home.module.css'; 
import Link from "next/link";

const Home = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  // 打开弹窗
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // 关闭弹窗
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [avatarUrl, setAvatarUrl] = useState(''); 

  useEffect(() => {
    const avatarPath = 'widget-avatars/rJ5W3JR1ALahUS4QSt7MhVatf89Vn9LSSY1dUzaRQQ8/lURE0N8GGwPSIoS_wZ4AwK99qHJFsa7PVsTTJ6TUkgmhwVn7d5HLVbC3yw8Ts-xHjwWkUelmtOzVvqWJbw0';
    setAvatarUrl(`/api/proxy/${encodeURIComponent(avatarPath)}`);
  }, []);

  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
  ];
  const hasPlayed = useRef([false, false, false]); // 标记每个视频是否已滚动触发过播放


  useEffect(() => {
    const interval = setInterval(() => {
      const video = video1Ref.current;
      if (video) {
        console.log("Playing video every 20 seconds...");
        video?.play(); // 播放视频
        setTimeout(() => {
          video.pause(); // 播放完成后暂停，停留在最后一帧
          console.log("Paused video on the last frame.");
        }, video.duration * 1000); // 根据视频时长暂停
      }
    }, 10000); // 每隔 20 秒触发一次

    // 清理定时器
    return () => clearInterval(interval);
  }, []);


  // 监听滚动触发播放
  useEffect(() => {
    const observers = videoRefs.map((videoRef, index) => {
      const video = videoRef.current;

      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log(`Video ${index + 1} intersection ratio:`, entry.intersectionRatio);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.99 && !hasPlayed.current[index]) {
            console.log(`Playing video ${index + 1} due to scroll...`);
            video?.play();
            hasPlayed.current[index] = true; // 标记视频已滚动触发播放
          }
        },
        { threshold: 0.99 } // 接近 100% 可见时触发
      );

      if (video) {
        observer.observe(video);
      }

      return observer;
    });

    // 清理观察器
    return () => {
      observers.forEach((observer, index) => {
        const video = videoRefs[index].current;
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs[index].current;
    if (video) {
      console.log(`Mouse entered video ${index + 1}, playing...`);
      video?.play();
    }
  };

 

  return (
    <div className = "bg-[#FFFFFF] ">
    {/* Add a top bar here */}
    
    <header className="flex  fixed  justify-between items-center px-8 py-4 bg-[#FFFFFF] border-b border-[#E8EBF6] w-full max-w-screen-2xl z-10 left-1/2 transform -translate-x-1/2 sm:overflow-visible overflow-x-auto">
        {/* 左侧 Logo 和标题 */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="FurSphere Logo" width={200} height={200} />
        </div>
       

        {/* 右侧导航菜单 */}
        <nav className="flex justify-center items-center space-x-20 w-2/4">
          <Link href="#home" className="text-gray-600 hover:text-blue-700">
            Home
          </Link>
          <Link href="#product" className="text-gray-600 hover:text-blue-700">
            Partnership
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-700">
            About
          </Link>
          <button className="px-8 py-2 bg-custom-gradient text-white rounded-full hover:bg-blue-600 transition duration-10 hover:brightness-75">
            Sign up
          </button>
        </nav>
    </header>
      

      <main>
        {/* 第一页 */}
      <section className="flex flex-col md:flex-row justify-center max-w-screen-2xl bg-[#ffffff] mx-auto">
        {/* 左侧内容 */}
        <div className="flex flex-col mt-20  items-center w-1/2">
        

        
         
          <video
            className="w-full "
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
       <div className="flex flex-col mt-60 ml-20 items-start w-1/2 h-100 text-left space-y-10">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-Ubuntu text-[#505D90] w-3/4 leading-snug">
            A pet concierge that<br />
            manages your pets <br /> 
            <span className="font-balooExtraBold text-5xl md:text-6xl lg:text-7xl text-[#5777D0]">HEALTH</span>
          </h1>
          

          <div className="flex flex-row items-center space-x-8 lg:space-y-0 lg:space-x-4 ">
          
          <div className="flex items-center px-0 py-0 bg-gray-100 rounded-full shadow-md  max-w-lg h-16">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent  outline-none text-gray-600 placeholder-gray-400 px-4"
          />
          <button 
            className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md transition duration-10 hover:brightness-75 h-full"
            onClick={handleOpenPopup}>
            Subscribe
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

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">or join</span>
              <Link href = 'https://discord.gg/676cBXbZhW'>
              <Image
                src="/discord-icon.svg"
                alt="Discord Icon"
                width={75}
                height={75}
                className="transition duration-10 hover:brightness-75"
              />
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
           {/* <Link> */}
              <Image
                src="/apple-logo.svg"
                alt="Apple"
                width={230}
                height={230}
                className="transition duration-10 hover:brightness-75"
              />
            {/* </Link> */}
            {/* <Link> */}
              <Image
                src="/google-logo.svg"
                alt="Google"
                width={230}
                height={230}
                className="transition duration-10 hover:brightness-75"
              />
            {/* </Link> */}
          </div>
        </div>
        </section>

      {/* 第二页 */}

      <section className="flex flex-row justify-center max-w-screen-2xl mx-auto bg-[#ffffff]">
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
            ref={videoRefs[0]}
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
      
      {/* 第三页 */}

      <section className="flex flex-row justify-center  max-w-screen-2xl mx-auto bg-[#ffffff]">

          
      {/* 左侧内容 */}
      <div className="flex flex-col  items-center w-full lg:w-1/2">
        

        <div className="w-full ">
         
          <video
            className="w-full rounded-[200px]"
            ref={videoRefs[1]}
            autoPlay
            loop = {false}
            muted
            onMouseEnter={() => handleMouseEnter(1)}
            style={{
              clipPath: "inset(1% 1% 1% 1%)", 
            }}
          >
            <source src="/video/page2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
        </div>
        </div>
        {/* 右侧内容 */}
       <div className="flex flex-col mt-20 ml-20 items-start w-1/2 space-y-10">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-Ubuntu text-[#505D90] w-full leading-snug">
        Help you know <span className="text-4xl md:text-5xl lg:text-6xl text-[#5777D0]">everything</span> <br />
        about your pet, even when<br />
        not at home.
        </h1>


        <div className="flex items-center bg-gray-100 rounded-full shadow-md  max-w-lg w-40 h-16">
        <button className=" bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md transition duration-10 hover:brightness-75 w-full h-full">
          Subscribe
        </button>
        </div>

          
        </div>
      </section>

      {/* 第四页 */}

      <section className="flex flex-row justify-center max-w-screen-2xl mx-auto bg-[#ffffff]">
       {/* 左侧内容 */}
       <div className="flex flex-col mt-20 ml-20 items-start w-1/2  text-left space-y-10">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-Ubuntu text-[#505D90] w-full leading-snug">
          Convert medical records <br />into <span className="text-4xl md:text-5xl lg:text-6xl text-[#5777D0]">pet parent-friendly</span>  <br /> 
          terms for easier  <br />understanding.
          </h1>
          

    
          <Link href  = 'https://discord.gg/676cBXbZhW'>
          <div className="flex items-center bg-gray-100 rounded-full shadow-md  max-w-lg w-40 h-16">
          <button className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md transition duration-10 hover:brightness-75 w-full h-full">
            Join Discord
          </button>
          </div>
          </Link>

            
        </div>
          
      {/* 右侧内容 */}
      <div className="flex flex-col  items-center w-full lg:w-1/2">
        

        <div className="w-full ">
         
          <video
            className="w-full rounded-[200px]"
            ref={videoRefs[2]}
            autoPlay
            loop = {false}
            muted
            onMouseEnter={() => handleMouseEnter(2)}
            style={{
              clipPath: "inset(1% 1% 1% 1%)", 
            }}
          >
            <source src="/video/page3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
        </div>
        </div>
      </section>

       {/* 第五页 */}

      <section className="flex mt-20 justify-center  max-w-screen-2xl mx-auto bg-[#ffffff]">
      <div className="relative w-full h-full">
        <img
          src="/page5.svg"
          alt="Example"
          className="w-full h-full object-cover rounded-lg"
        />
       
        <div className="absolute top-32 left-40">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Ubuntu text-[#3E3E3E] w-full leading-snug">
           FurSphere gives you an <br />
           all-in-one <span className="text-4xl md:text-5xl lg:text-6xl text-[#5777D0]">AI pet care</span> <br/>
           <span className="text-4xl md:text-5xl lg:text-6xl text-[#5777D0]">companion</span> <br />
           anytime, anywhere
          </h1>
        </div>
        
      </div>
      
      </section>
       {/* 第六页 */}

       <section className="flex justify-center max-w-screen-2xl mx-auto bg-[#ffffff]">
       <div className="relative w-full h-full mt-20 mb-20">
        <img
          src="/page6.svg"
          alt="Example"
          className="w-full h-full object-cover rounded-lg"
        />
       
        <div className="absolute top-12 left-20">
        <div className="flex flex-row items-center space-x-8 lg:space-y-0 lg:space-x-4 ">
          
          <div className="flex items-center px-0 py-0 bg-gray-100 rounded-full shadow-md  max-w-lg h-16">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent  outline-none text-gray-600 placeholder-gray-400 px-4"
          />
          <button className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md transition duration-10 hover:brightness-75 h-full">
            Subscribe
          </button>
          </div>

            <div className="flex items-center space-x-4">
              <span className="text-white">or join</span>
              <Link href= "https://discord.gg/676cBXbZhW">
              <Image
                src="/discord-icon.svg"
                alt="Discord Icon"
                width={75}
                height={75}
                className = "transition duration-10 hover:brightness-75"
              />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-[80px] right-[350px]">
        <h1 className=" font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em]">
         Company
          </h1>
        </div>

        <div className="absolute top-[120px] right-[328px]">
        <h1 className="font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em] leading-normal">
           Terms of Use <br />
           Support <br />
           Privacy Policy <br />
          </h1>
        </div>

        <div className="absolute top-[80px] right-[100px]">
        <h1 className=" font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em]">
         Contact
          </h1>
        </div>

        <div className="absolute top-[120px] right-[96px]">
        <h1 className="font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em] leading-normal">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Linkedin
        </a>
           <br />
           Youtube <br />
          </h1>
        </div>
        
        <div className="absolute bottom-24 left-20">
        <Image
                src="/bottomlogo.svg"
                alt="Bottom Logo"
                width={200}
                height={200}
        />
        </div>


        <div className="absolute bottom-20 left-24">
        <h1 className=" font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em]">
         Copyright © 2025 FurSphere. All rights reserved.
          </h1>
        </div>

        <div className="absolute bottom-12 right-20">
        <h1 className=" font-balooExtraBold text-white text-[96px] leading-[96px] tracking-[-0.04em]">
           Start Caring More.
          </h1>
        </div>

      </div>
      
      </section>

      </main>
      
      
    </div>
  );
};

export default Home;
