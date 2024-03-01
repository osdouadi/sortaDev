
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';

const navItems = [
  { title: 'About me', link: '#' },
  { title: 'Experience', link: '#' },
  { title: 'Skills', link: '#' },
  { title: 'Projects', link: '#' },
  { title: 'Contact', link: '#' },
];

const socialMedia = [
  {
    link: '#',
    icon: <TbBrandGithubFilled />,
  },
  {
    link: '#',
    icon: <FaLinkedinIn />,
  },
  {
    link: '#',
    icon: <FaFacebookF />,
  },
  {
    link: '#',
    icon: <RiInstagramFill />,
  },
  {
    link: '#',
    icon: <FaTelegramPlane />,
  },
];

const skillsData = [
  { name: 'HTML', image: '/images/html.svg' },
  { name: 'CSS', image: '/images/css.svg' },
  { name: 'SASS', image: '/images/sass.svg' },
  { name: 'JavaScript', image: '/images/javascript.svg' },
  { name: 'TypeScript', image: '/images/typescript.svg' },
  { name: 'React', image: '/images/react.svg' },
  { name: 'Redux', image: '/images/redux.svg' },
  { name: 'Next.js', image: '/images/next.svg' },
  { name: 'Node js', image: '/images/node.svg' },
  { name: 'Express.js', image: '/images/express.svg' },
  { name: 'MongoDB', image: '/images/mongodb.svg' },
  { name: 'mongoose', image: '/images/mongoose.svg' },
  { name: 'Tailwind', image: '/images/tailwindcss.svg' },
  { name: 'Bootstrap', image: '/images/bootstrap.svg' },
  { name: 'Git', image: '/images/git-icon.svg' },
  { name: 'C++', image: '/images/cplusplus.svg' },
  { name: 'Framer Motion', image: '/images/framer-motion.svg' },
  { name: 'MUI', image: '/images/mui.svg' },
  { name: 'Styled-components', image: '/images/styled-com.svg' },
];
export { navItems, socialMedia, skillsData };
