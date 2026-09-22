import { NavItem, SkillItem, ProjectItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Harsha',
  college: 'Joy University',
  degree: 'B.Tech Computer Science',
  currentLevel: 'First-Year Student',
  careerGoal: 'Aspiring AI Engineer',
  subtitle: 'First-Year B.Tech CSE Student | Aspiring AI Engineer',
  introduction:
    'I am a first-year B.Tech Computer Science student at Joy University, building my foundations in programming, web development, and Generative AI. I am eager to learn, create practical projects, and grow into an AI Engineer.',
  contactLine: 'Open to learning opportunities, collaborations, and new ideas.',
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: SkillItem[] = [
  {
    id: 'skill-python',
    name: 'Basic Python',
    level: 'Foundational / Basic Level',
    description:
      'Understanding core programming logic, control flow, functions, and introductory data structures as the stepping stone for AI development.',
    iconName: 'terminal',
    tags: ['Core Syntax', 'Functions', 'Problem Solving', 'Data Structures Intro'],
  },
  {
    id: 'skill-webdev',
    name: 'Basic Web Development',
    level: 'Foundational / Basic Level',
    description:
      'Building responsive and structured web layouts using modern frontend tools, HTML, CSS, and interactive components to showcase AI applications.',
    iconName: 'globe',
    tags: ['HTML5 & CSS3', 'Responsive Layouts', 'UI Basics', 'Component Design'],
  },
  {
    id: 'skill-genai',
    name: 'Basic Generative AI',
    level: 'Foundational / Basic Level',
    description:
      'Exploring prompt engineering, LLM interfaces, and integrating generative capabilities into accessible web projects during my early learning journey.',
    iconName: 'sparkles',
    tags: ['Prompt Engineering', 'LLM Fundamentals', 'AI Prototyping', 'GenAI Workflows'],
  },
];

export const FEATURED_PROJECT: ProjectItem = {
  id: 'project-myth-ai',
  name: 'Myth AI',
  tagline: 'Generative AI Application',
  description: 'A Generative AI-based project created as part of my learning journey.',
  link: 'https://myth-ai-seven.vercel.app',
  tags: ['Generative AI', 'Web Development', 'AI Project', 'Vercel'],
  category: 'Featured Project',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'social-github',
    platform: 'GitHub',
    url: 'https://github.com/Harsha-A-6',
    label: 'github.com/Harsha-A-6',
  },
  {
    id: 'social-linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harsha-a-b7a564439/',
    label: 'linkedin.com/in/harsha-a-b7a564439',
  },
];
