import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <header className="bg-transparent p-4">
        <div className="container mx-auto flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
      </header>
      <main className="container mx-auto flex items-center justify-center" style={{ height: 'calc(100vh - 80px)' }}>
        <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
        <iframe 
        src="https://discord.com/widget?id=1252434184434221076&theme=dark" 
        width="350" 
        height="500"
        style={{ border: 0 }} 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-forms"
        ></iframe>
        </div>
      </main>
    </div>
  );
};


export default Home;