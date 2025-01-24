"use client";

import React,{ useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Home.module.css'; 
import Link from "next/link";

const Home = () => {
  const [avatarUrl, setAvatarUrl] = useState(''); 

  useEffect(() => {
    const avatarPath = 'widget-avatars/rJ5W3JR1ALahUS4QSt7MhVatf89Vn9LSSY1dUzaRQQ8/lURE0N8GGwPSIoS_wZ4AwK99qHJFsa7PVsTTJ6TUkgmhwVn7d5HLVbC3yw8Ts-xHjwWkUelmtOzVvqWJbw0';
    setAvatarUrl(`/api/proxy/${encodeURIComponent(avatarPath)}`);
  }, []);
 

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
            Product
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-700">
            About
          </Link>
          <button className="px-8 py-2 bg-custom-gradient text-white rounded-full hover:bg-blue-600">
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
            autoPlay
            loop
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
          <button className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-400 h-full">
            Subscribe
          </button>
          </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">or join</span>
              <Image
                src="/discord-icon.svg"
                alt="Discord Icon"
                width={75}
                height={75}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center  bg-gray-200 rounded-full shadow hover:bg-gray-300">
              <Image
                src="/apple-logo.svg"
                alt="Apple"
                width={220}
                height={220}
              />
            </button>
            <button className="flex items-center  bg-gray-200 rounded-full shadow hover:bg-gray-300">
              <Image
                src="/google-logo.svg"
                alt="Google"
                width={220}
                height={220}
              />
            </button>
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
          <button className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-400 w-full h-full">
            Sign Up
          </button>
          </div>

            
        </div>
          
      {/* 右侧内容 */}
      <div className="flex flex-col  items-center w-full lg:w-1/2">
        

        <div className="w-full ">
         
          <video
            className="w-full rounded-[200px] "
            autoPlay
            loop
            muted
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
            autoPlay
            loop
            muted
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

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-Ubuntu text-[#505D90] w-3/4 leading-snug">
        Help you know <span className="text-4xl md:text-5xl lg:text-6xl text-[#5777D0]">everything</span> <br />
        about your pet, even when<br />
        not at home.
        </h1>


        <div className="flex items-center bg-gray-100 rounded-full shadow-md  max-w-lg w-40 h-16">
        <button className=" bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-400 w-full h-full">
          Subscribe
        </button>
        </div>

          
        </div>
      </section>

      {/* 第四页 */}

      <section className="flex flex-row justify-center max-w-screen-2xl mx-auto bg-[#ffffff]">
       {/* 左侧内容 */}
       <div className="flex flex-col mt-20 ml-20 items-start w-1/2  text-left space-y-10">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-Ubuntu text-[#505D90] w-3/4 leading-snug">
          Convert medical records <br />into <span className="text-4xl md:text-5xl lg:text-6xl text-[#5777D0]">pet parent-friendly</span>  <br /> 
          terms for easier  <br />understanding.
          </h1>
          

    
          
          <div className="flex items-center bg-gray-100 rounded-full shadow-md  max-w-lg w-40 h-16">
          <button className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-400 w-full h-full">
            Join Discord
          </button>
          </div>

            
        </div>
          
      {/* 右侧内容 */}
      <div className="flex flex-col  items-center w-full lg:w-1/2">
        

        <div className="w-full ">
         
          <video
            className="w-full rounded-[200px]"
            autoPlay
            loop
            muted
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
          <h1 className="text-4xl font-bold text-blue-700 w-full leading-snug">
           FurSphere gives you an <br />
           all-in-one <span className="text-5xl text-blue-900">AI pet care</span> <br/>
           <span className="text-5xl text-blue-900">companion</span> <br />
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
          <button className="bg-custom-gradient text-white font-bold px-6 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-400 h-full">
            Subscribe
          </button>
          </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">or join</span>
              <Image
                src="/discord-icon.svg"
                alt="Discord Icon"
                width={75}
                height={75}
              />
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-80">
        <h1 className=" font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em]">
         Company
          </h1>
        </div>

        <div className="absolute top-28 right-80">
        <h1 className="font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em] leading-normal">
           Terms of Use <br />
           Support <br />
           Privacy Policy <br />
          </h1>
        </div>

        <div className="absolute top-20 right-24">
        <h1 className=" font-Inter text-white text-[14px] leading-[14px] tracking-[-0.04em]">
         Contact
          </h1>
        </div>

        <div className="absolute top-28 right-24">
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
