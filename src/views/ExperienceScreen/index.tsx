import { EXPERIENCE } from '@/constants/text';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const ExperienceScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 p-5">
          <div className="w-full md:w-2/5 flex flex-col gap-6 order-2 md:order-1">
            <h1 className="font-semibold text-white text-4xl">EXPERIENCE</h1>
            <div className="w-full md:w-2/3 h-2 bg-primary" />
          </div>
          <div className="w-full md:w-3/5 order-1 md:order-2">
            <h1 className="text-7xl font-extrabold text-transparent stroke-white">2024 - 2025</h1>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-10 md:gap-5 p-5">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-5 md:gap-20 w-full"
            >
              <div className="w-full md:w-2/5 flex items-center gap-2">
                <ChevronDoubleRightIcon className="w-12 h-10 text-primary font-semibold" />
                <div>
                  <h2 className="text-white font-semibold">{item.name}</h2>
                  <p className="mt-1 text-gray-300">{item.position}</p>
                </div>
              </div>
              <p className="w-full md:w-3/5 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceScreen;
