"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const scrollThreshold = 30; // 降低滾動閾值，使滾動更靈敏
  const scrollCooldown = 500; // 減少滾動冷卻時間至 500 毫秒

  const certificates = [
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
    const navLinks = document.querySelectorAll('nav a');
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const updateNavigation = () => {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -50 && rect.top <= 50) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            const span = link.querySelector('span');
            if (span) span.style.transform = 'scaleX(0)';
          });
          const currentLink = navLinks[index];
          currentLink.classList.add('active');
          const span = currentLink.querySelector('span');
          if (span) span.style.transform = 'scaleX(1)';
          setCurrentSection(index);
        }
      });
    };
    
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
      }, 800);
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
    window.addEventListener('scroll', updateNavigation);
    window.addEventListener('resize', handleResize);
    
    handleResize();
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', updateNavigation);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, lastScrollTime, scrollCooldown]);

  // 修改所有 section 的 className
  const sectionClassName = "min-h-screen relative flex flex-col items-center justify-center p-4 glow-bg";

  return (
    <>
      {/* Home Section */}
      <section id="home" className={sectionClassName}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
          <div className="glow-orb w-96 h-96 top-[-20%] left-[-10%] bg-[#FFD7BA]" />
          <div className="glow-orb w-96 h-96 bottom-[-20%] right-[-10%] bg-[#FFE4E1]" />
        </div>

        <div className="text-center space-y-8 animate-fadeIn relative">
          {/* 主標題 */}
          <div className="relative">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent">
                  LAU KWAN TING
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 blur-2xl opacity-20 transform scale-110" />
              </span>
            </h1>
          </div>
          
          {/* 副標題 */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-[#1a1a1a]/80 leading-relaxed relative group">
            <span className="relative inline-block group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300">
              Software Engineering student exploring full-stack development and AI technologies.
            </span>
            <br />
            <span className="relative inline-block group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300 delay-75">
              Learning to build meaningful applications with modern development tools.
            </span>
          </p>

          {/* 主要按鈕 */}
          <div className="flex justify-center pt-12 relative">
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
          <div className="flex items-center justify-center gap-8 mt-12">
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
      <section id="projects" className={sectionClassName}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6FA] to-[#F8F8FF] opacity-40" />
          <div className="glow-orb w-96 h-96 top-[-20%] right-[-10%] bg-[#E6E6FA]" />
          <div className="glow-orb w-96 h-96 bottom-[-20%] left-[-10%] bg-[#F8F8FF]" />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1a1a1a] text-center mb-12">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI E-commerce Platform */}
            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">AI-Powered E-commerce Platform</h3>
              <p className="text-[#1a1a1a]/80 mb-4">
                Built a generative AI-driven marketplace during a school hackathon.
                Integrated natural language processing for enhanced user interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'JavaScript', 'OpenAI API', 'NLP'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/20 text-[#1a1a1a] text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Android App */}
            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Android Application</h3>
              <p className="text-[#1a1a1a]/80 mb-4">
                Developed a data management Android application with robust user input handling
                and efficient data retrieval system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Java', 'SQLite', 'Android SDK'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/20 text-[#1a1a1a] text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={sectionClassName}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5DEB3] to-[#FFDAB9] opacity-40" />
          <div className="glow-orb w-96 h-96 top-[-20%] left-[-10%] bg-[#FFDAB9]" />
          <div className="glow-orb w-96 h-96 bottom-[-20%] right-[-10%] bg-[#F5DEB3]" />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1a1a1a] text-center mb-12">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/20 text-[#1a1a1a] text-sm font-medium">
                    {skill}
                  </span>
                ))}

              </div>
            </div>

            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'XAMPP', 'MySQL', 'SQLite', 'Linux', 'Android SDK'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/20 text-[#1a1a1a] text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={sectionClassName}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
          <div className="glow-orb w-96 h-96 top-[-20%] right-[-10%] bg-[#FFE4E1]" />
          <div className="glow-orb w-96 h-96 bottom-[-20%] left-[-10%] bg-[#FFF5E1]" />
        </div>

        <div className="max-w-6xl mx-auto w-full animate-fadeIn px-4 py-16 min-h-screen overflow-y-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a]">Resume</h2>
            <p className="text-base sm:text-lg mt-2 text-[#1a1a1a] opacity-80">
              Education and Professional Experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8">
            <div className="p-4 sm:p-8 rounded-2xl hover:scale-[1.02] transition-transform bg-white/50 hover:bg-white/80">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#1a1a1a]">Higher Diploma in Software Engineering</h4>
                  <p className="text-sm text-[#1a1a1a]/70">Hong Kong Institute of Information Technology (HKIIT)</p>
                  <p className="text-sm text-[#1a1a1a]/60">2023 - Present</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-8 rounded-2xl hover:scale-[1.02] transition-transform bg-white/50 hover:bg-white/80">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">Languages</h3>
              <div className="space-y-2">
                <p className="text-[#1a1a1a]">English</p>
                <p className="text-[#1a1a1a]">Cantonese</p>
                <p className="text-[#1a1a1a]">Mandarin</p>
              </div>
            </div>
          </div>

          {/* 證書部分 */}
          <div className="p-4 sm:p-8 rounded-2xl hover:scale-[1.02] transition-transform bg-white/50 hover:bg-white/80 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCertificate(cert.id)}
                  className="p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300 text-left"
                >
                  <h4 className="font-medium text-[#1a1a1a]">{cert.title}</h4>
                  <p className="text-sm text-[#1a1a1a]/70">HackerRank Verified</p>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4">
            <a
              href="/LauKwanTingResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full glass text-[#1a1a1a] hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group"
            >
              Preview Resume
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
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group"
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

