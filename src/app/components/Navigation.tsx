"use client";

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        // 計算section在視窗中的可見比例
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / sectionHeight;
        
        if (visibilityRatio > 0.5) {
          currentSection = section.id;
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化時執行一次
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className="container mx-auto">
      <div className="glass rounded-full px-2 py-2 backdrop-blur-sm">
        <ul className="flex items-center justify-center relative">
          {['Home', 'Projects', 'Skills', 'Resume'].map((item) => {
            const itemId = item.toLowerCase();
            return (
              <li key={item} className="relative">
                <a
                  href={`#${itemId}`}
                  onClick={(e) => handleClick(e, itemId)}
                  className={`relative px-6 py-2 text-[#1a1a1a] hover:text-[#4a4a4a] transition-all duration-300 block text-sm font-medium group ${
                    activeSection === itemId ? 'active' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] transform transition-transform duration-300 ${
                    activeSection === itemId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}