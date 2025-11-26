
"use client";

import { useState, useEffect, useCallback } from 'react';

export const useSectionScroll = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollCooldown = 500;

  const scrollToSection = useCallback((index: number) => {
    const sections = document.querySelectorAll('section');
    if (isScrolling || index < 0 || index >= sections.length) return;

    setIsScrolling(true);

    const targetSection = sections[index];
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    setActiveSection(targetSection.id);

    setTimeout(() => {
      setIsScrolling(false);
    }, scrollCooldown);
  }, [isScrolling, scrollCooldown]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return { isScrolling, setIsScrolling, scrollCooldown, activeSection, scrollToSection };
};
