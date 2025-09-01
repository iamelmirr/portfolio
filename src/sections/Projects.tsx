import languageLabImage from "@/assets/images/language-lab-project.png"
import shelfieImage from "@/assets/images/shelfie-project.png"
import caffiendImage from "@/assets/images/caffiendproject.png"
import nutriluxImage from "@/assets/images/nutrilux-project.png"
import githubImage from "@/assets/images/github-image.png"
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal",
    year: "2025",
    title: "AI Interactive Language Tutor",
    results: [
      { title: "Integrated NLP with STT/TTS" },
      { title: "Implemented real-time AI chat" },
      { title: "User authentication and progress tracking" },
    ],
    link: "https://language1ab.netlify.app/",
    image: languageLabImage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Book Search Engine",
    results: [
      { title: "Integrated Google Books API" },
      { title: "Implemented dynamic book filtering" },
      { title: "Optimized search results display" },
    ],
    link: "https://shelfie-search.netlify.app/",
    image: shelfieImage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Caffeine Intake Tracker",
    results: [
      { title: "Health-based consumption alerts" },
      { title: "Providing feedback system" },
      { title: "Designed an intuitive user interface" },
    ],
    link: "https://caffiending.netlify.app/",
    image: caffiendImage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Web3 Rock Paper Scissors Online Game",
    results: [
      { title: "Web3 integration with WebSockets" },
      { title: "Real-time multiplayer game logic" },
      { title: "Project in development, not fully completed" },
    ],
    githubLink: "https://github.com/iamelmirr/web3-rps",
    image: githubImage,
  },
  {
    company: "Nutrilux",
    year: "2024",
    title: "WordPress WooCommerce Custom Webshop",
    results: [
      { title: "Custom WooCommerce setup" },
      { title: "E-commerce features implementation" },
      { title: "Completed for client, functional but basic" },
    ],
    githubLink: "https://github.com/iamelmirr/nutrilux-mvp/tree/preerrors",
    image: nutriluxImage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Neurodiversity Customizer Chrome Extension",
    results: [
      { title: "Chrome extension for enhanced reading" },
      { title: "Tailored for neurodiverse users" },
      { title: "Ongoing project, prototype stage" },
    ],
    githubLink: "https://github.com/iamelmirr/neurodiversity-customizer-simple-version",
    image: githubImage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Web3 Smart Contracts",
    results: [
      { title: "Solidity smart contract development" },
      { title: "Web3 integration features" },
      { title: "In progress, basic implementations" },
    ],
    githubLink: "https://github.com/iamelmirr/",
    image: githubImage,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container flex flex-col">
      <SectionHeader 
      eyebrow="Real-world Results"
      title="Featured Projects"
      description="See how I transformed concepts into engaging digital experiences."
      />
      
      
      <div className="flex flex-col mt-10 md:mt-20 gap-12">
        {portfolioProjects.map((project, projectIndex) => (
          <Card className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16" key={project.title} style={{
            top: `calc(64px + ${projectIndex * 20}px)`
          }}>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
            
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span> {project.company} </span>
                <span>&bull;</span>
                <span> {project.year} </span>
              </div>
             
             <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
             <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
             <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(results => (
                <li key={results.title} className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckIcon className="size-5 md:size-6" />
                  <span>{results.title}</span>
                </li>
              ))}
             </ul>
             {project.link ? (
               <a href={project.link} target="_blank">
                 <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:opacity-60 transition">
                   <span>Visit Live Site</span>
                   <ArrowUpRightIcon className="size-4" />
                 </button>
               </a>
             ) : project.githubLink ? (
               <a href={project.githubLink} target="_blank">
                 <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:opacity-60 transition">
                   <span>View on GitHub</span>
                   <ArrowUpRightIcon className="size-4" />
                 </button>
               </a>
             ) : null}
             </div>
             <div className="relative">
             <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"  />
             </div>
             </div>
          </Card>
        ))}

      </div>
    <div className="flex flex-col pt-24 pb-30 items-center">  
    <SectionHeader eyebrow="Explore More" title="See more on GitHub" description="Message me for access to private projects"/>
    <a href="https://github.com/iamelmirr" target="_blank" className="bg-white text-gray-950 h-12 w-max px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-12 hover:opacity-60 transition"><span>GitHub</span> <ArrowUpRightIcon className="size-4" /></a>
    </div>
    </div>

  </section>;
};
