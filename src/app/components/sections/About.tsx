"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Terminal } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[-10%] w-64 h-64 bg-indigo-200/30 rounded-full blur-[80px]" />
         <div className="absolute bottom-[20%] right-[-10%] w-64 h-64 bg-pink-200/30 rounded-full blur-[80px]" />
      </div>

      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Passionate software engineering student with a focus on creating innovative solutions
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
        {/* Self Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <User className="w-6 h-6 text-primary" />
                Who I Am
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I&apos;m Lau Kwan Ting, a dedicated software engineering student at HKIIT. My journey in technology began with a fascination for problem-solving and creating impactful solutions.
              </p>
              <p>
                I specialize in full-stack development and have a growing interest in AI technologies. My experience spans from web development to game plugins, always focusing on delivering high-quality, user-centric solutions.
              </p>
              <p>
                Outside of coding, I&apos;m an avid learner who enjoys exploring new technologies and contributing to open-source projects. I believe in the power of technology to create positive change in the world.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Competencies */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
             <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Terminal className="w-6 h-6 text-primary" />
                Competencies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-blue-400" />
                   Key Skills
                </h4>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>Full-stack Web Development</li>
                  <li>AI and Machine Learning</li>
                  <li>Game Development</li>
                  <li>Database Management</li>
                </ul>
              </div>

              <div>
                 <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-yellow-400" />
                   Achievements
                </h4>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>Gold Award in Project Orion Hackathon 2024</li>
                  <li>HackerRank Certifications</li>
                  <li>Creator of Qwqcoin Plugin</li>
                  <li>Smart Power Box System Developer</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
