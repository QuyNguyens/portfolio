import React from 'react';
import Avatar from '../../../public/images/avatar.jpg';
import Image from 'next/image';

const HomeScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-[1280px] flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 p-5 my-auto flex flex-col gap-4 text-white">
          <span className="text-primary text-base">Hello !!!</span>
          <h1 className="w-2/3 text-6xl">I'm Nguyen Cong Quy</h1>
          <h2 className="p-1 text-black bg-primary w-fit font-semibold">FULLSTACK DEVELOPER</h2>
          <p className="mt-6">
            I’m a full-stack developer with a strong passion for building modern, user-friendly, and
            efficient web applications. I have experience working on the backend with C# and
            Node.js, and I’m proficient in frontend development using React.js, Next.js, and
            TypeScript. I’m always eager to learn new technologies and improve my skills to
            contribute effectively to real-world projects.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <Image src={Avatar} alt="" className="w-[450px] h-[606px] bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
