"use client";

import React from 'react';

const AboutSection = () => {
  const sectionClassName = "min-h-screen relative flex flex-col items-center justify-center p-4 glow-bg pt-28";

  return (
    <section id="about" className={sectionClassName}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6FA] to-[#F8F8FF] opacity-40" />
        <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 top-[-20%] left-[-10%] bg-[#FFD7BA]" />
        <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bottom-[-20%] right-[-10%] bg-[#FFE4E1]" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            <span className="relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF9B7B] to-transparent rounded-full" />
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1a1a1a]/80 max-w-3xl mx-auto">
            Passionate software engineering student with a focus on creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Introduction */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Self Introduction
            </h3>
            <div className="space-y-4 text-[#1a1a1a]/80">
              <p>
                Hi, I&apos;m Lau Kwan Ting, a dedicated software engineering student at HKIIT. My journey in technology began with a fascination for problem-solving and creating impactful solutions.
              </p>
              <p>
                I specialize in full-stack development and have a growing interest in AI technologies. My experience spans from web development to game plugins, always focusing on delivering high-quality, user-centric solutions.
              </p>
              <p>
                Outside of coding, I&apos;m an avid learner who enjoys exploring new technologies and contributing to open-source projects. I believe in the power of technology to create positive change in the world.
              </p>
            </div>
          </div>

          {/* Personal Competency and Artifacts */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Personal Competency
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Key Competencies</h4>
                <ul className="list-disc list-inside space-y-2 text-[#1a1a1a]/80">
                  <li>Full-stack Web Development</li>
                  <li>AI and Machine Learning</li>
                  <li>Game Development</li>
                  <li>Database Management</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Evidence and Achievements</h4>
                <ul className="list-disc list-inside space-y-2 text-[#1a1a1a]/80">
                  <li>Gold Award in Project Orion Hackathon 2024</li>
                  <li>HackerRank Certifications in Software Engineering</li>
                  <li>Developed Qwqcoin - A Minecraft Virtual Currency System</li>
                  <li>Created Smart Power Box Management System</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Activities and Competitions</h4>
                <ul className="list-disc list-inside space-y-2 text-[#1a1a1a]/80">
                  <li>Participated in ASK IT x IVE Summer Hackathon 2024</li>
                  <li>Active contributor to open-source projects</li>
                  <li>Regular participant in coding competitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
