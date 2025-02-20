"use client";

import { useEffect, useState } from 'react';
import { 
  SiHtml5, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiSolidity,
  SiJavascript,
  SiPython,
  SiOpenjdk as SiJava,
  SiSharp as SiCsharp,
  SiPhp,
  SiCss3,
  SiAmazonwebservices as SiAmazonaws,
  SiGooglecloud,
  SiVercel,
  SiGit,
  SiXampp,
  SiMysql,
  SiSqlite,
  SiLinux,
  SiAndroid
} from 'react-icons/si';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [showDemoTip, setShowDemoTip] = useState(true);
  const scrollCooldown = 500;

  const certificates = [
    {
      id: 'gold-award-2024',
      title: 'Gold Award - Project Orion Hackathon',
      url: 'https://askit.com.hk/askit-x-ive-summer-hackathon-2024',
      pdf: '/digital_credentials.pdf'
    },
    {
      id: 'd202ba186a0e',
      title: 'Software Engineer',
      url: 'https://www.hackerrank.com/certificates/d202ba186a0e',
      pdf: '/software_engineer certificate.pdf'
    },
    {
      id: '5c5e5be13c03',
      title: 'Software Engineer Intern',
      url: 'https://www.hackerrank.com/certificates/5c5e5be13c03',
      pdf: '/software_engineer_intern certificate.pdf'
    },
    {
      id: '6ecc4bb9862e',
      title: 'Frontend Developer (React)',
      url: 'https://www.hackerrank.com/certificates/6ecc4bb9862e',
      pdf: '/frontend_developer_react certificate.pdf'
    },
    {
      id: '4d51500dac85',
      title: 'SQL (Basic)',
      url: 'https://www.hackerrank.com/certificates/4d51500dac85',
      pdf: '/sql_basic certificate.pdf'
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const scrollToSection = (index: number) => {
      if (isScrolling) return;
      
      isScrolling = true;
      setCurrentSection(index);
      
      clearTimeout(scrollTimeout);
      
      const targetSection = sections[index];
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, scrollCooldown);
    };

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
    
    handleResize();
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, lastScrollTime]);

  // 修改所有 section 的 className
  const sectionClassName = "min-h-screen relative flex flex-col items-center justify-center p-4 glow-bg";

  return (
    <>
      {/* Home Section */}
      <section id="home" className={sectionClassName}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 top-[-20%] left-[-10%] bg-[#FFD7BA]" />
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bottom-[-20%] right-[-10%] bg-[#FFE4E1]" />
        </div>

        <div className="text-center space-y-4 sm:space-y-8 animate-fadeIn relative px-4 sm:px-6">
          {/* 主標題 */}
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent">
                  LAU KWAN TING
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 blur-2xl opacity-20 transform scale-110" />
              </span>
            </h1>
          </div>
          
          {/* 副標題 */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-[#1a1a1a]/80 leading-relaxed relative group px-4">
            <span className="relative inline-block group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300">
              Software Engineering student exploring full-stack development and AI technologies.
            </span>
            <br />
            <span className="relative inline-block group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300 delay-75">
              Learning to build meaningful applications with modern development tools.
            </span>
          </p>

          {/* 主要按鈕 */}
          <div className="flex justify-center pt-8 sm:pt-12 relative">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                if (!isScrolling) {
                  setIsScrolling(true);
                  setCurrentSection(1);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => setIsScrolling(false), scrollCooldown);
                }
              }}
              className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] text-white hover:shadow-lg transition-all duration-300 font-medium group"
            >
              <span className="relative z-10 flex items-center justify-center">
                View Projects
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* 社交媒體連結 */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            <a
              href="mailto:laukwantingabc123@gmail.com"
              className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="https://github.com/MAG10d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/YourLinkedInUsername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 底部裝飾 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm text-gray-400">
          <div className="w-8 h-px bg-gray-300" />
          <span>Scroll to explore</span>
          <div className="w-8 h-px bg-gray-300" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`min-h-screen relative flex flex-col items-center justify-start pt-20 pb-8 p-4 overflow-y-auto`}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6FA] to-[#F8F8FF] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-4">
            <div className="space-y-4 lg:space-y-6 flex flex-col">
            {/* AI E-commerce Platform */}
              <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 hover:bg-white/70 transition-all duration-300 hover:shadow-lg flex-1">
                <div className="aspect-[16/9] sm:aspect-[3/1] overflow-hidden rounded-lg mb-3">
                  <img 
                    src="/ia.png" 
                    alt="AI E-commerce Platform"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] group-hover:text-[#2a2a2a] transition-colors">AI-Powered E-commerce</h3>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">Hackathon</span>
                  </div>
                  <p className="text-[#1a1a1a]/70 text-xs sm:text-sm mb-3 line-clamp-2">
                    Built a generative AI-driven marketplace during a school hackathon. Integrated natural language processing for enhanced user interaction.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                {['Python', 'JavaScript', 'OpenAI API', 'NLP'].map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/70 text-xs font-medium hover:bg-[#1a1a1a]/10 transition-colors">
                    {tech}
                  </span>
                ))}
                  </div>
              </div>
            </div>

              {/* Qwqcoin */}
              <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 hover:bg-white/70 transition-all duration-300 hover:shadow-lg flex-1">
                <div className="aspect-[16/9] sm:aspect-[3/1] overflow-hidden rounded-lg mb-3">
                  <img 
                    src="/spigot.png" 
                    alt="Qwqcoin"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] group-hover:text-[#2a2a2a] transition-colors">Qwqcoin</h3>
                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">Plugin</span>
                  </div>
                  <p className="text-[#1a1a1a]/70 text-xs sm:text-sm mb-3 line-clamp-2">
                    A Minecraft plugin developed in Java that implements a virtual currency system, demonstrating game development and database management skills.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'Spigot API', 'Game Development'].map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/70 text-xs font-medium hover:bg-[#1a1a1a]/10 transition-colors">
                    {tech}
                  </span>
                ))}
                  </div>
                  <a 
                    href="https://github.com/MAG10d/Qwqcoin" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-xs text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors group/link"
                  >
                    <svg className="w-3 h-3 mr-1 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Smart Power Box */}
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 hover:bg-white/70 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
              <div className="flex-grow overflow-hidden rounded-lg mb-3 max-h-[500px] relative">
                {/* 頂部提示 */}
                <div className="absolute top-0 left-0 right-0 bg-black/60 text-white px-4 py-2 text-sm rounded-t-lg z-20 flex items-center justify-between">
                  <span>Smart Power Box Demo</span>
                  <a 
                    href="https://immortal-life.github.io/smart-power-box" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white flex items-center gap-1 text-xs"
                  >
                    <span>Open in new window</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                {/* iframe 容器 */}
                <div className="relative h-full min-h-[400px] overflow-hidden group/iframe">
                  {/* 互動提示遮罩 */}
                  {showDemoTip && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/iframe:opacity-100 transition-opacity duration-300 z-20">
                      <div className="text-white text-center px-4 flex flex-col items-center gap-3">
                        <p className="text-sm max-w-md">You're previewing the demo. Move your cursor away to continue browsing the portfolio.</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowDemoTip(false);
                          }}
                          className="relative group/btn pointer-events-auto flex items-center justify-center w-8 h-8 hover:scale-110 transition-transform duration-300"
                          title="Close tip"
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full transition-transform duration-300 group-hover/btn:scale-90" />
                          <div className="absolute inset-0 bg-white/10 rounded-full transform rotate-45 transition-transform duration-300 group-hover/btn:rotate-90" />
                          <svg 
                            className="w-4 h-4 relative z-10 text-white transform transition-all duration-300 group-hover/btn:scale-110" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2.5} 
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  <iframe 
                    src="https://immortal-life.github.io/smart-power-box"
                    title="Smart Power Box Demo"
                    className="w-full h-full rounded-lg transform group-hover/iframe:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] group-hover:text-[#2a2a2a] transition-colors">Smart Power Box</h3>
                  <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">Web App</span>
                </div>
                <p className="text-[#1a1a1a]/70 text-xs sm:text-sm mb-3 line-clamp-2">
                  A web-based smart power box management system with separate interfaces for landlords and tenants.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { name: 'HTML5', icon: SiHtml5 },
                    { name: 'Tailwind CSS', icon: SiTailwindcss }
                  ].map((tech) => (
                    <span key={tech.name} className="px-2 py-1 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/70 text-xs font-medium hover:bg-[#1a1a1a]/10 transition-colors flex items-center gap-1.5">
                      <tech.icon className="w-3.5 h-3.5" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={sectionClassName}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 top-[-20%] left-[-10%] bg-[#FFD7BA]" />
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bottom-[-20%] right-[-10%] bg-[#FFE4E1]" />
        </div>

        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] text-center mb-8 sm:mb-12 relative">
            <span className="relative inline-block">
              Skills
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF9B7B] to-transparent rounded-full" />
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            {/* Programming Languages */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD7BA]/30 to-[#FFB7A0]/30 rounded-2xl blur-xl transition-all duration-500 group-hover:scale-105" />
              <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Programming Languages
                </h3>
              <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'JavaScript', icon: SiJavascript, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                    { name: 'Python', icon: SiPython, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                    { name: 'Java', icon: SiJava, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                    { name: 'C#', icon: SiCsharp, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                    { name: 'PHP', icon: SiPhp, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                    { name: 'HTML', icon: SiHtml5, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                    { name: 'CSS', icon: SiCss3, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                    { name: 'Solidity', icon: SiSolidity, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' }
                  ].map((tech) => (
                    <span 
                      key={tech.name} 
                      className={`px-4 py-2 rounded-full ${tech.color} text-sm font-medium border hover:scale-105 transition-all duration-300 cursor-default hover:shadow-sm flex items-center gap-2`}
                    >
                      <tech.icon className="w-4 h-4" />
                      {tech.name}
                  </span>
                ))}
                </div>
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB7A0]/30 to-[#FFD7BA]/30 rounded-2xl blur-xl transition-all duration-500 group-hover:scale-105" />
              <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  Technologies & Tools
                </h3>
                <div className="space-y-6">
                  {/* Frameworks & Libraries */}
                  <div>
                    <h4 className="text-sm font-medium text-[#1a1a1a]/60 mb-3">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Next.js', icon: SiNextdotjs, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' }
                      ].map((tech) => (
                        <span 
                          key={tech.name} 
                          className={`px-4 py-2 rounded-full ${tech.color} text-sm font-medium border hover:scale-105 transition-all duration-300 cursor-default hover:shadow-sm flex items-center gap-2`}
                        >
                          <tech.icon className="w-4 h-4" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Cloud & Deployment */}
                  <div>
                    <h4 className="text-sm font-medium text-[#1a1a1a]/60 mb-3">Cloud & Deployment</h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'AWS', icon: SiAmazonaws, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                        { name: 'Google Cloud', icon: SiGooglecloud, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                        { name: 'Vercel', icon: SiVercel, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' }
                      ].map((tech) => (
                        <span 
                          key={tech.name} 
                          className={`px-4 py-2 rounded-full ${tech.color} text-sm font-medium border hover:scale-105 transition-all duration-300 cursor-default hover:shadow-sm flex items-center gap-2`}
                        >
                          <tech.icon className="w-4 h-4" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Development Tools */}
                  <div>
                    <h4 className="text-sm font-medium text-[#1a1a1a]/60 mb-3">Development Tools</h4>
              <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Git', icon: SiGit, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                        { name: 'XAMPP', icon: SiXampp, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                        { name: 'MySQL', icon: SiMysql, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                        { name: 'SQLite', icon: SiSqlite, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                        { name: 'Linux', icon: SiLinux, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                        { name: 'Android SDK', icon: SiAndroid, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' }
                      ].map((tech) => (
                        <span 
                          key={tech.name} 
                          className={`px-4 py-2 rounded-full ${tech.color} text-sm font-medium border hover:scale-105 transition-all duration-300 cursor-default hover:shadow-sm flex items-center gap-2`}
                        >
                          <tech.icon className="w-4 h-4" />
                          {tech.name}
                  </span>
                ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen relative flex flex-col items-center justify-center overflow-x-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 top-[-20%] right-[-10%] bg-[#FFE4E1]" />
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bottom-[-20%] left-[-10%] bg-[#FFF5E1]" />
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2">Resume</h2>
            <p className="text-sm sm:text-base text-[#1a1a1a]/80">
              Education & Professional Experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8">
            <div className="p-4 sm:p-6 rounded-xl hover:scale-[1.02] transition-transform bg-white/60 backdrop-blur-sm hover:bg-white/70">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#1a1a1a]">Higher Diploma in Software Engineering</h4>
                  <p className="text-sm text-[#1a1a1a]/70">Hong Kong Institute of Information Technology (HKIIT)</p>
                  <p className="text-sm text-[#1a1a1a]/60">2023 - Present</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl hover:scale-[1.02] transition-transform bg-white/60 backdrop-blur-sm hover:bg-white/70">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">Languages</h3>
              <div className="space-y-2">
                <p className="text-[#1a1a1a]">English</p>
                <p className="text-[#1a1a1a]">Cantonese</p>
                <p className="text-[#1a1a1a]">Mandarin</p>
              </div>
            </div>
          </div>

          {/* 證書部分 */}
          <div className="p-4 sm:p-6 rounded-xl hover:scale-[1.02] transition-transform bg-white/60 backdrop-blur-sm hover:bg-white/70 mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert) => {
                const isGoldAward = cert.id === 'gold-award-2024';
                return (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCertificate(cert.id)}
                    className="p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300 text-left w-full"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-[#1a1a1a]">{cert.title}</h4>
                        <p className="text-sm text-[#1a1a1a]/70">
                          {isGoldAward ? 'ASK IT x IVE' : 'HackerRank'}
                        </p>
                      </div>
                      {isGoldAward && (
                        <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                          Gold Award
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
            <a
              href="/LauKwanTingResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm text-[#1a1a1a] hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group"
            >
              View Resume
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </a>

            <a
              href="/LauKwanTingResume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group"
            >
              Download Resume
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 證書 Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl w-[95%] h-[95%] max-w-5xl relative">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-50 bg-white rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`${certificates.find(cert => cert.id === selectedCertificate)?.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full rounded-2xl"
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
}

