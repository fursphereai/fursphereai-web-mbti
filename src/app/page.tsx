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
      <header className="bg-transparent p-4 absolute top-0 left-0">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} priority />
        </div>
      </header>
      <main className="flex items-center justify-center min-h-screen flex-col ">
      <div className="flex flex-col items-center mb-12 relative">
          <span className={styles.text}>Join our Discord！</span>
          <a href="https://discord.gg/pa2B2yre" target="_blank" rel="noopener noreferrer" className="flex items-center mt-4">
            <span className={styles.clickText}>Click here!</span>
            <svg className={styles.arrow} viewBox="0 0 200 50">
              <path d="M0,25 L175,25" stroke="white" strokeWidth="5" fill="none" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>
            </svg>
            <Image src="/discord-logo.png" alt="Join our Discord" width={150} height={150} />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/discord.png" alt="Screenshot" width={850} height={420} />
        </div>
      </main>
    </div>
  );
};

export default Home;
