
import React,{ useEffect, useRef, useState } from 'react';
import './section.css';
import Image from 'next/image';


const Section5 = () => {

return (
  <section className="section-5 mt-[4vh] ">
      
        
    
        <div className="section-left">
          <h1 className="section-text md:text-[3vw] max-text-[48px] md:leading-[4vw]">
           FurSphere gives you an <br />
           all-in-one <span className="md:text-[3vw] max-text-[48px] font-Ubuntu text-[#5777D0]">AI pet care</span> <br/>
           <span className="md:text-[3vw] max-text-[48px] font-Ubuntu text-[#5777D0]">companion</span> <br />
           anytime, anywhere
          </h1>
        </div>
     
        <img
          src="/page5.svg"
          alt="Example"
          className="section-image"
        />
      
      
  </section>
)
}

 export default Section5;

