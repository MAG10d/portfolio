"use client";

import React from 'react';

const CareerSection = () => {
  const sectionClassName = "min-h-screen relative flex flex-col items-center justify-center p-4 glow-bg pt-28";

  return (
    <section id="career" className={sectionClassName}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
        <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 top-[-20%] right-[-10%] bg-[#FFE4E1]" />
        <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bottom-[-20%] left-[-10%] bg-[#FFF5E1]" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            <span className="relative inline-block">
              Career Goal & Plan
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF9B7B] to-transparent rounded-full" />
            </span>
          </h2>
        </div>

        <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-500">
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#FF9B7B] to-transparent rounded-full" />
              <h4 className="text-xl font-semibold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Career Goal
              </h4>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                <p className="text-[#1a1a1a]/80 leading-relaxed">
                  To become a senior full-stack developer at a leading technology company within 5 years, specializing in AI-powered web applications and contributing to innovative solutions that make a positive impact.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#FF9B7B] to-transparent rounded-full" />
              <h4 className="text-xl font-semibold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Steps to Reach Goal
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-white/40 backdrop-blur-sm p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <h5 className="font-medium text-[#1a1a1a] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Education & Certifications
                  </h5>
                  <ul className="list-none space-y-2 text-[#1a1a1a]/80">
                    {[
                      'Complete Higher Diploma with distinction',
                      'Obtain AWS/Google Cloud certifications',
                      'Complete advanced AI/ML courses'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9B7B]/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="group bg-white/40 backdrop-blur-sm p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <h5 className="font-medium text-[#1a1a1a] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Professional Experience
                  </h5>
                  <ul className="list-none space-y-2 text-[#1a1a1a]/80">
                    {[
                      'Secure internships in software development',
                      'Contribute to major open-source projects',
                      'Build a strong portfolio of web applications'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9B7B]/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#FF9B7B] to-transparent rounded-full" />
              <h4 className="text-xl font-semibold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Skills to Acquire
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-white/40 backdrop-blur-sm p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <h5 className="font-medium text-[#1a1a1a] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technical Skills
                  </h5>
                  <ul className="list-none space-y-2 text-[#1a1a1a]/80">
                    {[
                      'Advanced React.js and Node.js',
                      'AI/ML frameworks (TensorFlow, PyTorch)',
                      'Cloud architecture and DevOps',
                      'System design and scalability'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9B7B]/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="group bg-white/40 backdrop-blur-sm p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <h5 className="font-medium text-[#1a1a1a] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF9B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learning Plan
                  </h5>
                  <ul className="list-none space-y-2 text-[#1a1a1a]/80">
                    {[
                      'Online courses (Coursera, Udacity)',
                      'Technical workshops and bootcamps',
                      'Industry mentorship programs',
                      'Target completion: Within 2 years'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9B7B]/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
