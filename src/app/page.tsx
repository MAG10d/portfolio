"use client";

import { useSectionScroll } from '../hooks/useSectionScroll';
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
  const { activeSection, scrollToSection } = useSectionScroll();

  return (
    <>
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HomeSection scrollToSection={scrollToSection} />
      <AboutSection />
      <CareerSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection
        certificates={certificates}
        education={education}
        languages={languages}
      />
    </>
  );
}
