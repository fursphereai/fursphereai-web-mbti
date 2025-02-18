import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    console.log('Menu toggled');
    setMenuOpen(!menuOpen); // 切换菜单
  };
  const closeMenu = () => setMenuOpen(false); 

  return (
    <header className="flex items-center fixed top-0  h-[90px] bg-[#FFFFFF]  border-b border-[#E8EBF6] w-full max-w-screen-[1440px]  z-10 sm:overflow-visible overflow-x-auto">
     
      
    <button
      className="sm:hidden flex items-center justify-center w-10 h-10 bg-black"
      onClick={toggleMenu}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg> */}
    </button>


    <nav
    className={`${
      menuOpen ? 'block' : 'hidden'
    } sm:hidden flex flex-col items-start w-full absolute left-0 top-[90px] bg-white border border-[#E8EBF6] p-4 gap-y-2 z-10`}
    >
    <Link href="#home" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
      Home
    </Link>
    <Link href="#MBTI" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
      MBTI
    </Link>
    <Link href="#Partnership" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
      Partnership
    </Link>
    <Link href="#about" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
      About
    </Link>
  </nav>
    <nav className="hidden sm:flex flex-col md:flex-row justify-end items-center gap-x-[20px] absolute right-[283.14px]">
      <Link href="#home" className="text-[16px] px-3 py-2 md:py-2 text-[#1A1D1F] hover:text-blue-700">
        Home
      </Link>
      <Link href="#MBTI" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
        MBTI
      </Link>
      <Link href="#Partnership" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
        Partnership
      </Link>
      <Link href="#about" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
        About
      </Link>
    </nav>
    
      <div className=" absolute w-[210px] h-[64px] left-[75px] ">
        <Image src="/logo.svg" alt="FurSphere Logo"  layout="responsive"  width = "210" height= "64" />
      </div>
      
    

      {/* 右侧导航菜单
      <nav className= " hidden  sm: absolute right-[283.14px] flex flex-row justify-end items-center gap-x-[20px] ">
        <Link href="#home" className="text-[16px] px-3 py-2 md:py-2 text-[#1A1D1F] hover:text-blue-700">
          Home
        </Link>
        <Link href="#MBTI" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
          MBTI
        </Link>
        <Link href="#Partnership" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
          Partnership
        </Link>
        <Link href="#about" className="text-[16px] px-3 py-2 text-[#1A1D1F] hover:text-blue-700">
          About
        </Link>
      </nav> */}

      {/* 右侧按钮 */}
      
      <button className=" absolute w-[149px] h-[48px] right-[80px] text-[16px] bg-custom-gradient text-white rounded-full  transition duration-10 hover:brightness-75">
          Sign up
      </button>


</header>
  );
};

export default Header;
