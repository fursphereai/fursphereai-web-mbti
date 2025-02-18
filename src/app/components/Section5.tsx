
import React,{ useEffect, useRef, useState } from 'react';



const Section5 = () => {

return (
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
)
}

 export default Section5;

