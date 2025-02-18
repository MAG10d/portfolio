"use client";

import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const scrollThreshold = 30; // 降低滾動閾值，使滾動更靈敏
  const scrollCooldown = 500; // 減少滾動冷卻時間至 500 毫秒

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    const updateNavigation = () => {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -100 && rect.top <= 100) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            const span = link.querySelector('span');
            if (span) span.style.transform = 'scaleX(0)';
          });
          const currentLink = navLinks[index];
          currentLink.classList.add('active');
          const span = currentLink.querySelector('span');
          if (span) span.style.transform = 'scaleX(1)';
        }
      });
    };
    
    const scrollToSection = (index: number) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      setCurrentSection(index);
      
      sections[index].scrollIntoView({ behavior: 'smooth' });
      updateNavigation();
      
      setTimeout(() => {
        setIsScrolling(false);
      }, scrollCooldown);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < 50) return; // 防止快速連續滾動
      setLastScrollTime(now);

      // 累積滾動量
      const scrollAmount = Math.abs(e.deltaY);
      if (scrollAmount < scrollThreshold) return;

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', updateNavigation);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', updateNavigation);
    };
  }, [currentSection, isScrolling, lastScrollTime]);

  return (
    <>
      {/* Home Section */}
      <section id="home" className="h-screen relative flex flex-col items-center justify-center p-4 glow-bg">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
          <div className="glow-orb w-96 h-96 top-[-20%] left-[-10%] bg-[#FFD7BA]" />
          <div className="glow-orb w-96 h-96 bottom-[-20%] right-[-10%] bg-[#FFE4E1]" />
        </div>

        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent">
              KWAN TING LAU
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-[#1a1a1a] opacity-80 leading-relaxed">
            Software Engineer specializing in full-stack development and AI integration.
            Passionate about creating innovative solutions and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <a href="mailto:laukwantingabc123@gmail.com"
              className="glass px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 text-[#1a1a1a] font-medium group"
            >
              Contact Me
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
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
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group"
            >
              View Projects
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen relative flex flex-col items-center justify-center p-4 glow-bg">
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
      <section id="skills" className="h-screen relative flex flex-col items-center justify-center p-4 glow-bg">
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
      <section id="resume" className="h-screen relative flex flex-col items-center justify-center p-4 glow-bg">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
          <div className="glow-orb w-96 h-96 top-[-20%] right-[-10%] bg-[#FFE4E1]" />
          <div className="glow-orb w-96 h-96 bottom-[-20%] left-[-10%] bg-[#FFF5E1]" />
        </div>

        <div className="max-w-6xl mx-auto w-full animate-fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1a1a1a]">Resume</h2>
            <p className="text-lg sm:text-xl mt-4 text-[#1a1a1a] opacity-80">
              Education and Professional Experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#1a1a1a]">Higher Diploma in Software Engineering</h4>
                  <p className="text-sm text-[#1a1a1a]/70">Institute of Vocational Education (IVE)</p>
                  <p className="text-sm text-[#1a1a1a]/60">2023 - Present</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Languages</h3>
              <div className="space-y-2">
                <p className="text-[#1a1a1a]">English</p>
                <p className="text-[#1a1a1a]">Cantonese</p>
                <p className="text-[#1a1a1a]">Mandarin</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="/LauKwanTingResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full glass text-[#1a1a1a] hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group"
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
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group"
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
    </>
  );
}
