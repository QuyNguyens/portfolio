import React from 'react';
import Avatar from '../../../public/images/aboutme.jpg';
import Image from 'next/image';
import { INTEREST } from '@/constants/text';
import { Button } from '@heroui/react';

const AboutMeScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-[1280px] flex flex-col md:flex-row items-center gap-28">
        <div className="w-full md:w-1/3 flex justify-center p-5">
          <Image src={Avatar} alt="avatar" />
        </div>
        <div className="w-full md:w-2/3 p-5 flex flex-col gap-6">
          <h1 className="text-white font-semibold text-6xl">MY BIOGRAPHY</h1>
          <div className="w-1/2 h-2 bg-primary" />
          <p className="text-gray-300 w-full md:w-4/5">
            I’m a full-stack developer with a strong passion for building modern, user-friendly, and
            efficient web applications. I have experience working on the backend with C# and
            Node.js, and I’m proficient in frontend development using React.js, Next.js, and
            TypeScript. I’m always eager to learn new technologies and improve my skills to
            contribute effectively to real-world projects.
          </p>
          <p className="text-gray-300 w-4/5">
            In the future, I aim to specialize in software architecture and contribute to building
            scalable, high-performance systems.
          </p>
          <h2 className="text-white font-semibold text-xl">Skill & Interest</h2>
          <div className="w-4/5 grid grid-cols-3 gap-4">
            {INTEREST.map((item, index) => (
              <Button
                key={index}
                variant="bordered"
                className="border-gray-300 rounded-full text-gray-300"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeScreen;
