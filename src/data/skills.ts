import React from 'react';
import { IconType } from 'react-icons';
import {
  SiHtml5,
  SiNextdotjs,
  SiSolidity,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiSharp,
  SiPhp,
  SiCss3,
  SiAmazonwebservices,
  SiGooglecloud,
  SiVercel,
  SiGit,
  SiXampp,
  SiMysql,
  SiSqlite,
  SiLinux,
  SiAndroid,
  SiDart,
  SiFlutter
} from 'react-icons/si';

export interface SkillItem {
  name: string;
  icon: IconType;
  color?: string;
}

export interface SkillCategory {
  title: string;
  icon?: React.ReactNode;
  skills: SkillItem[];
}

export const programmingLanguages: SkillItem[] = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: SiOpenjdk },
  { name: 'C#', icon: SiSharp },
  { name: 'PHP', icon: SiPhp },
  { name: 'Solidity', icon: SiSolidity },
  { name: 'Dart', icon: SiDart }
];

export const frameworksAndLibraries: SkillItem[] = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
];

export const cloudAndDeployment: SkillItem[] = [
  { name: 'AWS', icon: SiAmazonwebservices },
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'Vercel', icon: SiVercel }
];

export const developmentTools: SkillItem[] = [
  { name: 'Git', icon: SiGit },
  { name: 'XAMPP', icon: SiXampp },
  { name: 'MySQL', icon: SiMysql },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'Linux', icon: SiLinux },
  { name: 'Android SDK', icon: SiAndroid },
];
