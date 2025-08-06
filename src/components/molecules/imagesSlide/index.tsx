import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../arrowSlider';
import { PROJECT } from '@/constants/text';
import ImageItem from '../imageItem';

export default function ImagesSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {PROJECT.map((item, index) => (
        <ImageItem
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
          url={item.url}
        />
      ))}
    </Slider>
  );
}
