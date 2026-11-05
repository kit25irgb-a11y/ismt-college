export const SITE_CONFIG = {
  name: 'ISMT College',
  description: 'Leading Institution for IT and Management Education in Nepal',
  contact: {
    email: 'info@ismt.edu.np',
    phone: '+977-1-XXXXXXX',
    address: 'Kathmandu, Nepal',
  },
  socials: {
    facebook: 'https://facebook.com/ismtcollege',
    linkedin: 'https://linkedin.com/company/ismtcollege',
    instagram: 'https://instagram.com/ismtcollege',
    twitter: 'https://twitter.com/ismtcollege',
  },
  nav: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
};

export const COURSES = [
  {
    id: 'bsc-cs',
    title: 'BSc (Hons) Computing',
    level: 'Undergraduate',
    duration: '3 Years',
    description: 'A comprehensive program focusing on software engineering, network security, and modern computing paradigms.',
    features: ['Cloud Computing', 'Cyber Security', 'Software Development'],
  },
  {
    id: 'bsc-it',
    title: 'BSc (Hons) Information Technology',
    level: 'Undergraduate',
    duration: '3 Years',
    description: 'Focused on the practical application of technology in business environments and system administration.',
    features: ['Database Management', 'IT Infrastructure', 'Web Technologies'],
  },
  {
    id: 'ba-business',
    title: 'BA (Hons) Business Management',
    level: 'Undergraduate',
    duration: '3 Years',
    description: 'Developing leadership and management skills for the global business landscape.',
    features: ['Strategic Management', 'Marketing', 'Entrepreneurship'],
  },
];

export const STATS = [
  { label: 'Students', value: '5000+', icon: 'Users' },
  { label: 'Faculty', value: '150+', icon: 'GraduationCap' },
  { label: 'Courses', value: '20+', icon: 'BookOpen' },
  { label: 'Placement Rate', value: '92%', icon: 'Briefcase' },
];
