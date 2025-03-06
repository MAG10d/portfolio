"use client";

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 處理導航欄顯示/隱藏
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // 處理當前部分高亮
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;
        
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setIsMenuOpen(false);
    }
  };

  const navItems = ['Home', 'About', 'Career', 'Projects', 'Skills'];

  return (
    <nav 
      className={`fixed w-full transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* 桌面版導航 */}
      <div className="hidden md:block container mx-auto px-4 py-6">
        <div className="glass rounded-full px-2 py-2 backdrop-blur-sm">
          <ul className="flex items-center justify-center relative">
            {navItems.map((item) => {
              const itemId = item.toLowerCase();
              return (
                <li key={item} className="relative">
                  <a
                    href={`#${itemId}`}
                    onClick={(e) => handleClick(e, itemId)}
                    className={`relative px-6 py-2 text-[#1a1a1a] hover:text-[#4a4a4a] transition-all duration-300 block text-sm font-medium group ${
                      activeSection === itemId ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/70'
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
      </div>

      {/* 手機版導航 */}
      <div className="md:hidden">
        {/* 漢堡菜單按鈕 */}
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex items-center justify-center">
              <span className={`absolute w-full h-0.5 bg-[#1a1a1a] transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              }`} />
              <span className={`absolute w-full h-0.5 bg-[#1a1a1a] transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute w-full h-0.5 bg-[#1a1a1a] transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              }`} />
            </div>
          </button>
        </div>

        {/* 手機版菜單 */}
        <div 
          className={`fixed inset-0 transform transition-all duration-500 ${
            isMenuOpen 
              ? 'translate-x-0 moca-glass' 
              : 'translate-x-full bg-transparent'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end px-6 py-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 moca-glass rounded-full flex items-center justify-center shadow-lg"
                aria-label="Close menu"
              >
                <svg 
                  className="w-6 h-6 text-[#1a1a1a]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col items-center justify-center gap-12 py-8 px-6 rounded-3xl moca-glass">
                {navItems.map((item) => {
                  const itemId = item.toLowerCase();
                  return (
                    <li key={item} className="relative group">
                      <a
                        href={`#${itemId}`}
                        onClick={(e) => handleClick(e, itemId)}
                        className={`text-3xl font-medium transition-all duration-300 ${
                          activeSection === itemId 
                            ? 'text-[#1a1a1a]' 
                            : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                        }`}
                      >
                        {item}
                      </a>
                      <span className={`block h-0.5 mt-2 bg-gradient-to-r from-[#1a1a1a] to-transparent transform origin-left transition-transform duration-300 ${
                        activeSection === itemId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'
                      }`} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 回到頂部按鈕 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          prevScrollPos > 200 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <svg 
          className="w-6 h-6 text-[#1a1a1a]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </nav>
  );
}