import React from 'react';

type LineProps = {
  className: string;
  isLeft: boolean;
};

const Line = ({ className, isLeft }: LineProps) => {
  return (
    <div className={`flex ${className} items-center`}>
      {isLeft && (
        <div className="bg-white rounded-full p-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
      )}
      <div className="flex-1 bg-white h-0.5" />
      {!isLeft && (
        <div className="bg-white rounded-full p-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Line;
