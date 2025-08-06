import { SEO_METADATA_LIST } from '@/constants/common';
import HomeScreen from '@/views/HomeScreen';

export const generateMetadata = () => {
  return SEO_METADATA_LIST.home;
};

export default function Home() {
  return <HomeScreen />;
}
