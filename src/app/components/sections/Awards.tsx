"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Award } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

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
  return (
    <SectionWrapper id="awards">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-pink-200/30 rounded-full blur-[80px]" />
      </div>

      <div className="text-center mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Qualifications</h2>
          <p className="text-muted-foreground text-lg">Education, languages, and certifications</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-primary pl-4 py-1">
                     <h4 className="font-semibold text-lg">{edu.title}</h4>
                     <p className="text-sm text-muted-foreground">{edu.organization}</p>
                     <p className="text-xs text-muted-foreground/80 mb-2">{edu.year}</p>
                     <p className="text-sm">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {languages.map((lang) => (
                     <div key={lang.name} className="flex items-center p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                        <span className="text-2xl mr-3">{lang.icon}</span>
                        <div>
                           <p className="font-medium">{lang.name}</p>
                           {/* Assuming level might be added later or is implied */}
                        </div>
                     </div>
                   ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certifications */}
         <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert) => (
                    <a
                      key={cert.id}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300 border-dashed hover:border-solid relative">
                         <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                            <ExternalLinkIcon className="w-8 h-8 text-foreground" />
                         </div>
                         <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-base font-medium line-clamp-2">{cert.title}</CardTitle>
                            <CardDescription className="text-xs">
                              {cert.id === 'gold-award-2024'
                                ? 'ASK IT x IVE'
                                : cert.id === 'nvidia-deep-learning'
                                  ? 'NVIDIA'
                                  : 'HackerRank'
                              }
                            </CardDescription>
                         </CardHeader>
                      </Card>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.5 }}
           className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
        >
          <Button variant="outline" size="lg" className="rounded-full gap-2" asChild>
             <a href="/LauKwanTingResume.pdf" target="_blank" rel="noopener noreferrer">
               <Eye className="w-4 h-4" />
               View Resume
             </a>
          </Button>
          <Button size="lg" className="rounded-full gap-2" asChild>
             <a href="/LauKwanTingResume.pdf" download>
               <Download className="w-4 h-4" />
               Download Resume
             </a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default AwardsSection;
