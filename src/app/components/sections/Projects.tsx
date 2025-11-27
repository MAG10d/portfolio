"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, X } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  const [showDemoTip, setShowDemoTip] = useState(true);

  return (
    <SectionWrapper id="projects">
       <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="text-center mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">Featured work and experiments</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col ${project.isInteractiveDemo ? 'lg:row-span-2 h-full' : ''}`}
          >
            <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image / Demo Area */}
              <div className={`relative w-full overflow-hidden bg-muted ${project.isInteractiveDemo ? 'h-[400px] lg:h-[500px]' : 'aspect-video'}`}>
                {project.isInteractiveDemo ? (
                  <div className="relative w-full h-full group/iframe">
                     {/* Demo Overlay Tip */}
                    {showDemoTip && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 p-6 text-center transition-opacity duration-300 group-hover/iframe:opacity-0 pointer-events-none group-hover/iframe:pointer-events-none">
                         <div className="text-white space-y-2">
                           <p className="font-medium">Interactive Demo Available</p>
                           <p className="text-sm opacity-80">Hover to interact with the application</p>
                         </div>
                      </div>
                    )}

                     {/* Close Tip Button (Mobile friendly) */}
                     {showDemoTip && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-2 right-2 z-30 text-white hover:bg-white/20 pointer-events-auto"
                          onClick={() => setShowDemoTip(false)}
                        >
                          <X className="w-5 h-5" />
                        </Button>
                     )}

                    <iframe
                      src={project.demoUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                    <Badge variant={
                      project.type === 'Hackathon' ? 'default' :
                      project.type === 'Plugin' ? 'secondary' : 'outline'
                    }>
                      {project.type}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                     {project.githubUrl && (
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Source">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                     {project.demoUrl && !project.isInteractiveDemo && (
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-base mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
