import Dashboard from '../../public/images/dashboard.png';
import LvoDark from '../../public/images/lvo-dark.png';
import Grocery from '../../public/images/grocery.png';
import OpenDev from '../../public/images/opendev.png';
import Bootslander from '../../public/images/bootslander.png';
import Entrance from '../../public/images/entrance.png';
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
    image: Dashboard,
    name: 'Dashboard real time',
    description:
      'The project is a real-time management dashboard that visualizes key business metrics such as revenue, profit, order volume, and top-selling products through interactive charts. It also includes modules for managing orders, products, and users. The current version operates as a mock API, allowing users to freely create and manage sample data. The system is built with a Node.js backend, integrated with RabbitMQ and WebSocket for real-time communication, and a React.js frontend styled using Tailwind CSS and Headless UI',
    url: 'https://real-time-sales-dashboard.vercel.app',
  },
  {
    image: LvoDark,
    name: 'Lvo-Easy',
    description:
      'The project is a vocabulary learning platform where users can create and manage their own vocabulary lists grouped by topics they’ve studied. It also provides a built-in library of categorized vocabulary topics for users to explore and review. The system supports both personalized and structured learning, allowing users to efficiently review and retain vocabulary over time.',
    url: 'https://lvo-easy-api-znb3.vercel.app',
  },
  {
    image: Grocery,
    name: 'Grocery store',
    description:
      'This project is a full-stack grocery e-commerce web application built with Next.js and TypeScript on the frontend, and Typescript and Node.js on the backend. It features advanced product filtering and search, dynamic product variants, categorized product listings (e.g., best-selling, top deals), cart management, and VNPay payment integration.',
    url: 'https://grocery-ecru.vercel.app/',
  },
  {
    image: OpenDev,
    name: 'Open dev testing',
    description:
      'A frontend practice project built with React.js and Tailwind CSS to simulate real-world UI development tasks and enhance readiness for frontend interviews. The project focuses on clean component structure, responsive design, and efficient styling using utility-first CSS.',
    url: 'https://ui-open-dev-testing.vercel.app',
  },
  {
    image: Bootslander,
    name: 'Bootslander',
    description:
      'A frontend practice project built with React.js, Tailwind CSS, and Framer Motion to prepare for frontend interviews. The project focuses on building responsive UIs with clean component structure, while enhancing user experience through smooth animations and interactive transitions.',
    url: 'https://animation-bootslander.vercel.app/',
  },
  {
    image: Entrance,
    name: 'Entrance testing',
    description:
      'A frontend-only mini game project built with React.js and Tailwind CSS as part of a pre-interview technical test. The game challenges users to select numbers in ascending order, focusing on logic, UI responsiveness, and smooth interactive animations to enhance the user experience.',
    url: 'https://react-entrance-test.vercel.app/',
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
