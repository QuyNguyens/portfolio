'use client';

import { CONTACT } from '@/constants/text';
import React from 'react';
import ContactItem from './components/ContactItem';
import Line from '@/components/molecules/line';

const ContactScreen = () => {
  return (
    <div className="w-full h-full mx-auto max-w-[1280px] flex flex-col gap-20 p-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-semibold">GET IN TOUCH</h1>
        <span className="text-primary italic">Let's work together</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {CONTACT.map((item, index) => (
          <ContactItem key={index} icon={item.icon} name={item.name} desc={item.desc} />
        ))}
      </div>
      <div>
        <Line className="w-full" isLeft={false} />
        <h1 className="mt-5 text-center text-5xl md:text-6xl lg:text-7xl text-white font-semibold tracking-widest">
          NGUYEN CONG QUY
        </h1>
      </div>
    </div>
  );
};

export default ContactScreen;
