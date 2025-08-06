import { SEO_METADATA_LIST } from '@/constants/common';
import EducationScreen from '@/views/Education';
import React from 'react';

export const generateMetadata = () => {
  return SEO_METADATA_LIST.education;
};

const EducationPage = () => {
  return <EducationScreen />;
};

export default EducationPage;
