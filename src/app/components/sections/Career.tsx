"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

const CareerSection = () => {
  return (
    <SectionWrapper id="career">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-96 h-96 bg-green-200/30 rounded-full blur-[80px]" />
      </div>

      <div className="text-center mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Career Goal & Plan</h2>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Career Goal */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Target className="w-6 h-6 text-primary" />
                Career Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become a senior full-stack developer at a leading technology company within 5 years, specializing in AI-powered web applications and contributing to innovative solutions that make a positive impact.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Plan Steps - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Complete Higher Diploma with distinction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Obtain AWS/Google Cloud certifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Complete advanced AI/ML courses
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                 <CardTitle className="flex items-center gap-3 text-lg">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Secure internships in software development
                  </li>
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Contribute to major open-source projects
                  </li>
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Build a strong portfolio of web applications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
               <CardHeader>
                 <CardTitle className="flex items-center gap-3 text-lg">
                  <Target className="w-5 h-5 text-primary" />
                  Technical Skills to Acquire
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-2 text-muted-foreground text-sm">
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Advanced React.js and Node.js
                  </li>
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    AI/ML frameworks (TensorFlow, PyTorch)
                  </li>
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Cloud architecture and DevOps
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.5 }}
          >
             <Card className="h-full">
               <CardHeader>
                 <CardTitle className="flex items-center gap-3 text-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Learning Plan
                </CardTitle>
              </CardHeader>
               <CardContent>
                 <ul className="space-y-2 text-muted-foreground text-sm">
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Online courses (Coursera, Udacity)
                  </li>
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Technical workshops and bootcamps
                  </li>
                   <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Industry mentorship programs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CareerSection;
