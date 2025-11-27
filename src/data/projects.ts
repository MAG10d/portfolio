export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  isInteractiveDemo?: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-ecommerce",
    title: "AI-Powered E-commerce",
    type: "Hackathon",
    description: "Built a generative AI-driven marketplace during a school hackathon. Integrated natural language processing for enhanced user interaction.",
    techStack: ['Python', 'JavaScript', 'OpenAI API', 'NLP'],
    image: "/ia.png",
  },
  {
    id: "qwqcoin",
    title: "Qwqcoin",
    type: "Plugin",
    description: "A Minecraft plugin developed in Java that implements a virtual currency system, demonstrating game development and database management skills.",
    techStack: ['Java', 'Spigot API', 'Game Development'],
    image: "/spigot.png",
    githubUrl: "https://github.com/MAG10d/Qwqcoin",
  },
  {
    id: "smart-power-box",
    title: "Smart Power Box",
    type: "Web App",
    description: "A web-based smart power box management system with separate interfaces for landlords and tenants.",
    techStack: ['HTML5', 'Tailwind CSS'],
    image: "/smart-power-box-placeholder.png", // Will use iframe but needs a fallback or container
    demoUrl: "https://immortal-life.github.io/smart-power-box",
    githubUrl: "https://github.com/immortal-life/smart-power-box",
    isInteractiveDemo: true,
  }
];
