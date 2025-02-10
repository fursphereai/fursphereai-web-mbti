import React,{ useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";


const Section6 = () => {

return (
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
)
}

 export default Section6;

