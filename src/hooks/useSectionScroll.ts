"use client";

import { useState, useEffect, useCallback } from 'react';

export const useSectionScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const scrollCooldown = 500;

  const scrollToSection = useCallback((index: number) => {
    const sections = document.querySelectorAll('section');
    if (isScrolling || index < 0 || index >= sections.length) return;

    setIsScrolling(true);
    setCurrentSection(index);

    const targetSection = sections[index];
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, scrollCooldown);
  }, [isScrolling, scrollCooldown]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;
      setLastScrollTime(now);

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < sections.length) {
        scrollToSection(nextSection);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return;

      const touchEndY = e.changedTouches[0].clientY;

      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;
      setLastScrollTime(now);

      const touchDiff = touchStart - touchEndY;
      const minSwipeDistance = 50;

      if (Math.abs(touchDiff) > minSwipeDistance) {
        const direction = touchDiff > 0 ? 1 : -1;
        const nextSection = currentSection + direction;

        if (nextSection >= 0 && nextSection < sections.length) {
          scrollToSection(nextSection);
        }
      }

      setTouchStart(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const nextSection = currentSection + direction;

        if (nextSection >= 0 && nextSection < sections.length) {
          scrollToSection(nextSection);
        }
      }
    };

    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      const currentSectionElement = sections[currentSection];
      if (currentSectionElement) {
        currentSectionElement.scrollIntoView({ behavior: 'auto' });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    handleResize();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, lastScrollTime, touchStart, isScrolling, scrollToSection]);

  return { isScrolling, setIsScrolling, setCurrentSection, scrollCooldown };
};
