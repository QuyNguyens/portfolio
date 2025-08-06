import React from 'react';

type ContactItemProps = {
  icon: React.ElementType;
  name: string;
  desc: string;
};
const ContactItem = ({ icon: Icon, name, desc }: ContactItemProps) => {
  const handleClick = () => {
    if (name === 'Social Media') {
      window.open(desc, '_blank');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Icon className="w-12 h-12 text-primary" />
      <h2 className="text-white font-bold">{name}</h2>
      <p onClick={handleClick} className="text-gray-300 text-sm text-center">
        {desc}
      </p>
    </div>
  );
};

export default ContactItem;
