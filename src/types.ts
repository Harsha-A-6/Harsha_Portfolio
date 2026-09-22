export interface NavItem {
  name: string;
  href: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: string;
  description: string;
  iconName: 'terminal' | 'globe' | 'sparkles' | 'cpu';
  tags: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  link: string;
  tags: string[];
  category: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  label: string;
}
