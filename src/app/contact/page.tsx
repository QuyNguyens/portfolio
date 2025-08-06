import { SEO_METADATA_LIST } from '@/constants/common';
import ContactScreen from '@/views/ContactScreen';
import React from 'react';

export const generateMetadata = () => {
  return SEO_METADATA_LIST.contact;
};

const ContactPage = () => {
  return <ContactScreen />;
};

export default ContactPage;
