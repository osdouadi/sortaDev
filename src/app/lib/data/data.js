
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const navItems = [
  { title: 'About me', link: '#about' },
  { title: 'Skills', link: '#skills' },
  { title: 'Experience', link: '#experience' },
  { title: 'Contact', link: '#contact' },
];

const socialMedia = [
  {
    link: 'https://github.com/osdouadi',
    icon: <TbBrandGithubFilled />,
  },
  {
    link: 'https://www.linkedin.com/in/oussama-douadi-b9790b29b/',
    icon: <FaLinkedinIn />,
  },

  {
    link: 'https://wa.me/+213557958797',
    icon: <IoLogoWhatsapp />,
  },
  {
    link: 'mailto:osdouadi@gmail.com',
    icon: <MdEmail />,
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
