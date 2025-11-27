import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={cn(
        // Base styles: minimum full screen, relative for backgrounds, flex column for centering
        "min-h-screen relative flex flex-col items-center justify-start py-20 px-4 sm:px-6 lg:px-8 overflow-hidden",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
