"use client";

import React,{ useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Home.module.css'; 

const Home = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const avatarPath = 'widget-avatars/rJ5W3JR1ALahUS4QSt7MhVatf89Vn9LSSY1dUzaRQQ8/lURE0N8GGwPSIoS_wZ4AwK99qHJFsa7PVsTTJ6TUkgmhwVn7d5HLVbC3yw8Ts-xHjwWkUelmtOzVvqWJbw0';
    setAvatarUrl(`/api/proxy/${encodeURIComponent(avatarPath)}`);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 relative">
    {/* Add a top bar here */}
    <div className="bg-[#5777D0] text-white text-center h-[110px]">
      {/* <span>Welcome to Fursphere! Join our community!</span> */}
      <Image src="/main.png" alt="Logo" width={300} height={200} priority />
    </div>
      {/* <header className="bg-transparent p-4 absolute top-0 left-0">
        <div className="flex items-center">
        
        </div>
      </header> */}

      <main className="flex justify-between min-h-screen">

      <div className="flex flex-col items-center w-1/2">
         
          <a href="https://discord.gg/pa2B2yre" target="_blank" rel="noopener noreferrer" className="flex items-center mt-4 mb-4">
                  <Image src="/appstore.svg" alt="Join our Discord" width={150} height={150} />
          </a> 
          <div className="flex flex-col items-center">
            <Image src="/app.png" alt="Screenshot" width={350} height={300} />
          </div>
      
      </div>

      <div className="flex flex-col items-center w-1/2">
          <a href="https://discord.gg/PR4pWHCZ" target="_blank" rel="noopener noreferrer" className="flex items-center mt-4 mb-4">
                  <Image src="/discord-logo.png" alt="Join our Discord" width={150} height={150} />
          </a>
          <div className="flex flex-col items-center">
            <Image src="/discord.png" alt="Screenshot" width={325} height={300} />
          </div>
        
      </div>
      {/* <span className={styles.text}>Join our Discord！</span> */}
      </main>

      <div className="flex items-center justify-center">
        <span className={styles.text}>Join Us!</span>
      </div>
      
      
    </div>
  );
};

export default Home;
