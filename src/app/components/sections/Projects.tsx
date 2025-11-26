"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { SiHtml5, SiTailwindcss } from 'react-icons/si';

const ProjectsSection = () => {
  const [showDemoTip, setShowDemoTip] = useState(true);

  return (
    <section id="projects" className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-8 p-4 overflow-y-auto">
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
                <Image
                  src="/ia.png"
                  alt="AI E-commerce Platform"
                  width={800}
                  height={400}
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
                <Image
                  src="/spigot.png"
                  alt="Qwqcoin"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative">
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
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                >
                  <span className="flex items-center text-white font-medium">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </span>
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
                      <p className="text-sm max-w-md">You&apos;re previewing the demo. Move your cursor away to continue browsing the portfolio.</p>
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
            <div className="mt-auto relative">
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
              <a
                href="https://github.com/immortal-life/smart-power-box"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              >
                <span className="flex items-center text-white font-medium">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
