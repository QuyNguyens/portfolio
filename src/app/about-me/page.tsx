import { SEO_METADATA_LIST } from '@/constants/common';
import AboutMeScreen from '@/views/AboutMeScreen';
import React from 'react';

export const generateMetadata = () => {
  return SEO_METADATA_LIST.aboutMe;
};

const AboutMePage = () => {
  return <AboutMeScreen />;
};

export default AboutMePage;
