import Travel from '../../public/images/travel.png';
import Bootslander from '../../public/images/bootslander.png';
import Ctm from '../../public/images/ctm.jpg';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, HeartIcon } from '@heroicons/react/24/outline';

export const INTEREST = ['Frontend', 'Backend', 'Figma', 'Research', 'Reading'];

export const EXPERIENCE = [
  {
    name: 'Dabox Studio',
    position: 'Fullstack developer 1/2024 - 12/2024',
    description:
      'During my one year working on this WPF-based Amazon product management system, I deepened my experience with the MVVM pattern, improved my ability to analyze requirements, design maintainable components, and collaborate effectively throughout the development lifecycle using C# and SQL Server.',
  },
  {
    name: 'Novodan',
    position: 'Frontend developer 12/2024 - 2025',
    description:
      'During 6 months as a Frontend Developer on a medical AI project, I gained hands-on experience turning Figma designs into responsive UIs with React.js, collaborated closely with backend developers to define APIs, and improved my ability to troubleshoot and solve real-world interface and integration issues.',
  },
];

export const PROJECT = [
  {
    image: Ctm,
    name: 'Chợ thông minh',
    description:
      '“Chợ Thông Minh” is a full-stack e-commerce platform designed for local marketplaces, enabling users to browse products, place orders, and interact with merchants in real time. The system is built with a modern microservices architecture using Next.js, Node.js, and TypeScript, focusing on scalability, performance, and seamless user experience. Key features include product management, voucher system, real-time order updates, and integrated online payment solutions.',
    url: 'https://chothongminh.com',
  },
  {
    image: Travel,
    name: 'Travel Easy',
    description:
      'The project is a travel-promotion landing page that highlights destinations and tours while allowing users to easily schedule travel bookings. It is built with Next.js for fast, SEO-friendly performance and styled with Tailwind CSS and Headless UI for a clean, responsive user experience.',
    url: 'https://travel-easy-neon.vercel.app',
  },
  {
    image: Bootslander,
    name: 'Bootslander',
    description:
      'A frontend practice project built with React.js, Tailwind CSS, and Framer Motion to prepare for frontend interviews. The project focuses on building responsive UIs with clean component structure, while enhancing user experience through smooth animations and interactive transitions.',
    url: 'https://animation-bootslander.vercel.app/',
  },
];

export const CONTACT = [
  {
    icon: PhoneIcon,
    name: 'Phone & Mobile',
    desc: '(+84) 0866036694',
  },
  {
    icon: EnvelopeIcon,
    name: 'Email & Website',
    desc: 'quynguyen123alq@gmail.com',
  },
  {
    icon: MapPinIcon,
    name: 'Address',
    desc: 'Hoang Thuc Tram, Phuong Hoa Cuong, Da Nang',
  },
  {
    icon: HeartIcon,
    name: 'Social Media',
    desc: 'https://www.facebook.com/Quy0866',
  },
];
