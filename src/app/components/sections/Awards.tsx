"use client";

import React from 'react';
import Image from 'next/image';

interface Certificate {
  id: string;
  title: string;
  url: string;
  pdf: string;
}

interface Language {
  name: string;
  level: string;
  icon: string;
}

interface Education {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: string;
}

interface AwardsSectionProps {
  certificates: Certificate[];
  education: Education[];
  languages: Language[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ certificates, education, languages }) => {
  const sectionClassName = "min-h-screen relative flex flex-col items-center justify-center p-4 glow-bg";

  return (
    <section id="awards" className={sectionClassName}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E1] to-[#FFE4E1] opacity-40" />
        <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 top-[-20%] right-[-10%] bg-[#FFE4E1]" />
        <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bottom-[-20%] left-[-10%] bg-[#FFF5E1]" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            <span className="relative inline-block">
              Education & Languages
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF9B7B] to-transparent rounded-full" />
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Education</h3>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#1a1a1a]">{education[0].title}</h4>
                  <p className="text-[#1a1a1a]/70">{education[0].organization}</p>
                  <p className="text-[#1a1a1a]/60">{education[0].year}</p>
                  <p className="text-[#1a1a1a]/80 mt-4">{education[0].description}</p>
                </div>
              </div>

              {/* Languages Grid */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Languages</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.icon}</span>
                        <div>
                          <h4 className="font-medium text-[#1a1a1a]">{lang.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="text-[#1a1a1a] text-center mb-2">
                    <h4 className="font-medium text-lg">{cert.title}</h4>
                    <p className="text-sm text-[#1a1a1a]/60">
                      {cert.id === 'gold-award-2024'
                        ? 'ASK IT x IVE'
                        : cert.id === 'nvidia-deep-learning'
                          ? 'NVIDIA'
                          : 'HackerRank'
                      }
                    </p>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.pdf}
                        alt={cert.title}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Resume Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 pt-4">
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
      </div>
    </section>
  );
};

export default AwardsSection;
