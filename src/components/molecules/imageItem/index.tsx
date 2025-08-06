import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ImageItemProps = {
  image: StaticImageData;
  name: string;
  description: string;
  url: string;
};

const ImageItem = ({ image, name, description, url }: ImageItemProps) => {
  return (
    <div onClick={() => window.open(url, '_blank')} className="flex flex-col gap-2 w-full px-4">
      <Image src={image} alt="product" className="w-full h-80" />
      <h2 className="font-semibold text-white">{name}</h2>
      <p className="text-gray-300 line-clamp-4 text-sm">{description}</p>
    </div>
  );
};

export default ImageItem;
