import { SEO_METADATA_LIST } from '@/constants/common';
import ExperienceScreen from '@/views/ExperienceScreen';
import React from 'react';

export const generateMetadata = () => {
  return SEO_METADATA_LIST.experience;
};

const ExperiencePage = () => {
  return <ExperienceScreen />;
};

export default ExperiencePage;
