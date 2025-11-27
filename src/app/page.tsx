"use client";

import HomeSection from './components/sections/Home';
import AboutSection from './components/sections/About';
import CareerSection from './components/sections/Career';
import ProjectsSection from './components/sections/Projects';
import SkillsSection from './components/sections/Skills';
import AwardsSection from './components/sections/Awards';
import Navigation from './components/Navigation';
import { certificates } from '../data/certificates';
import { education } from '../data/education';
import { languages } from '../data/languages';

export default function Home() {
  // Simple scroll function passed to HomeSection for the CTA button
  // In a real app we might just use an anchor tag or a global context, but this is fine.
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <Navigation />
      <HomeSection scrollToSection={scrollToProjects} />
      <AboutSection />
      <CareerSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection
        certificates={certificates}
        education={education}
        languages={languages}
      />
    </main>
  );
}
