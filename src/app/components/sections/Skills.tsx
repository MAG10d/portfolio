"use client";

import React from 'react';
import {
  SiHtml5,
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
  SiAndroid,
  SiDart,
  SiFlutter
} from 'react-icons/si';

const SkillsSection = () => {
  const sectionClassName = "min-h-screen relative flex flex-col items-center justify-center p-4 glow-bg";

  return (
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
                  { name: 'Solidity', icon: SiSolidity, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                  { name: 'Dart', icon: SiDart, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' }
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                Technologies & Tools
              </h3>
              <div className="space-y-6">
                {/* Frameworks & Libraries */}
                <div>
                  <h4 className="text-sm font-medium text-[#1a1a1a]/60 mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Next.js', icon: SiNextdotjs, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                      { name: 'Flutter', icon: SiFlutter, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                      { name: 'HTML', icon: SiHtml5, color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]' },
                      { name: 'CSS', icon: SiCss3, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
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
                      { name: 'Android SDK', icon: SiAndroid, color: 'bg-[#FFF5E1] text-[#1a1a1a] border-[#FFD7BA]' },
                      { name: 'Drift', color: 'bg-[#FFE4E1] text-[#1a1a1a] border-[#FFD7BA]', icon: () => (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4z"/>
                        </svg>
                      )}
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-4 py-2 rounded-full ${tech.color} text-sm font-medium border hover:scale-105 transition-all duration-300 cursor-default hover:shadow-sm flex items-center gap-2`}
                      >
                        {tech.icon && <tech.icon className="w-4 h-4" />}
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
  );
};

export default SkillsSection;
