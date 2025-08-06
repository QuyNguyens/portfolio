import Line from '@/components/molecules/line';
import React from 'react';

const Footer = () => {
  return (
    <div className="mb-10 w-full h-full flex flex-col items-center justify-center px-5">
      <div className="w-full h-full max-w-[1280px]">
        <div className="flex gap-5 items-center">
          <Line isLeft={true} className="flex-1" />
          <span className="text-xl text-white">PORTOFOLIO 2025</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
