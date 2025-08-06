import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import Header from './components/Header';
import Footer from './components/Footer';
// import BackgroundImage from '../../../../public/images/background.jpg';
import BackgroundImage from '../../../../public/images/bg.png';

const InitialLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      >
        <Header />
        <div className="flex items-center flex-1">{children}</div>
        <Footer />
      </div>
    </HeroUIProvider>
  );
};

export default InitialLayout;
