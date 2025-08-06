'use client';

import ImagesSlide from '@/components/molecules/imagesSlide';
import React from 'react';

const ProjectScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-[1280px] flex flex-col md:flex-row items-center gap-10 p-5">
        <div className="w-full md:w-4/5 flex flex-col gap-5 order-2 md:order-1">
          <h1 className="text-4xl text-white font-semibold">SELECTED PROJECT</h1>
          <div className="w-2/3 md:w-1/3 h-2 bg-primary" />
          <ImagesSlide />
        </div>
        <div className="w-full md:w-1/5 order-1 md:order-2">
          <h1
            className="hidden md:block text-7xl font-extrabold text-transparent stroke-white ml-8"
            style={{
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)',
            }}
          >
            2024 - 2025
          </h1>

          <h1 className="block md:hidden text-6xl md:text-7xl font-extrabold text-transparent stroke-white">
            2024 - 2025
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
