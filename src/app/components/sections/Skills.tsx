"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionWrapper from '../SectionWrapper';
import {
  programmingLanguages,
  frameworksAndLibraries,
  cloudAndDeployment,
  developmentTools
} from '@/data/skills';

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-80 h-80 bg-orange-200/30 rounded-full blur-[80px]" />
      </div>

      <div className="text-center mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg">My technical toolbox and expertise</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {/* Programming Languages */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                 Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {programmingLanguages.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm flex items-center gap-2">
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Frameworks & Libraries */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                 Frameworks & Libraries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {frameworksAndLibraries.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm flex items-center gap-2">
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cloud & Deployment */}
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                 Cloud & Deployment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {cloudAndDeployment.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm flex items-center gap-2">
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

         {/* Development Tools */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                 Development Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {developmentTools.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm flex items-center gap-2">
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
