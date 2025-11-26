"use client";

import React from 'react';

interface HomeSectionProps {
  scrollToSection: (index: number) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ scrollToSection }) => {
  const sectionClassName = "min-h-screen relative flex flex-col items-center justify-center p-4 glow-bg";

  return (
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
              scrollToSection(3);
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
            href="https://www.linkedin.com/in/kwan-ting-lau-b23237211/"
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
  );
};

export default HomeSection;
