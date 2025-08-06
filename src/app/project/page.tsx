import { SEO_METADATA_LIST } from '@/constants/common';
import ProjectScreen from '@/views/ProjectScreen';
import React from 'react';

export const generateMetadata = () => {
  return SEO_METADATA_LIST.project;
};

const ProjectPage = () => {
  return <ProjectScreen />;
};

export default ProjectPage;
