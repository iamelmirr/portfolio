import adastraImage from "@/assets/images/adastra-project.png"
import panoramaImage from "@/assets/images/panorama-house-project.png"
import prevoditeljImage from "@/assets/images/prevoditelj-project.png"
import medzlisImage from "@/assets/images/medzlis-project.png"
import nutriluxImage from "@/assets/images/nutrilux-new-project.png"
import languageLabImage from "@/assets/images/language-lab-project.png"
import osijekKhutbahImage from "@/assets/images/osijekhutbaproject.png"
import retreatImage from "@/assets/images/20dayretreat-project.png"
import trendhoundImage from "@/assets/images/trendhound-project.png"
import faithImage from "@/assets/images/faith-project.png"
import aiPhotoboothImage from "@/assets/images/aiphotobooth-project.png"

import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "TrendHound",
    year: "2026",
    title: "TrendHound Trading Platform",
    results: [
      { title: "Real-time trading dashboard in Next.js & React with live WebSocket market data" },
      { title: "No-code strategy builder with backtesting across 7 exchanges and 350+ pairs" },
      { title: "Live order execution, P&L tracking, Stripe billing and 2FA" },
    ],
    link: "",
    image: trendhoundImage,
  },
  {
    company: "TrendHound",
    year: "2026",
    title: "Faith Booking Marketplace",
    results: [
      { title: "React Native (Expo) app + Next.js web for the Pakistani rental market" },
      { title: "Node.js API with identity verification, trust scores and escrow bookings" },
      { title: "Real-time safety layer: in-stay panic flow with live ops escalation" },
    ],
    link: "",
    image: faithImage,
  },
  {
    company: "Upanishad",
    year: "2026",
    title: "AI Photobooth Kiosk Platform",
    results: [
      { title: "React kiosk UI with camera capture and 40+ AI transformation styles" },
      { title: "Real-time generation pipeline with queues, retries and live progress" },
      { title: "Fleet admin panel: analytics, remote access and OTA updates" },
    ],
    link: "",
    image: aiPhotoboothImage,
  },
  {
    company: "Adastra Digital",
    year: "2025",
    title: "Adastra Digital Agency Website",
    results: [
      { title: "Premium web development & AI agency site" },
      { title: "Modern design with service showcase and portfolio" },
      { title: "Bilingual (EN/HR) with contact form integration" },
    ],
    link: "https://www.adastra-digital.agency",
    image: adastraImage,
  },
  {
    company: "Adastra Digital",
    year: "2025",
    title: "Panorama House Aljmaš",
    results: [
      { title: "Showcase site for a luxury vacation rental" },
      { title: "Visual-first design with booking integration" },
      { title: "SEO-optimized for local and international traffic" },
    ],
    link: "https://panoramahousealjmas.com",
    image: panoramaImage,
  },
  {
    company: "Adastra Digital",
    year: "2025",
    title: "Prevoditelj.io Court Translator",
    results: [
      { title: "Professional business site for a certified translator" },
      { title: "Multilingual (DE/HR) with i18n routing" },
      { title: "Clean, conversion-focused design" },
    ],
    link: "https://www.prevoditelj.io/hr",
    image: prevoditeljImage,
  },
  {
    company: "Adastra Digital",
    year: "2025",
    title: "Medžlis Islamske zajednice Osijek",
    results: [
      { title: "Community portal with integrated CMS" },
      { title: "News, events, and multimedia content management" },
      { title: "Multilingual support with responsive design" },
    ],
    link: "https://www.medzlis-osijek.com",
    image: medzlisImage,
  },
  {
    company: "Adastra Digital",
    year: "2025",
    title: "Nutrilux Sports Nutrition E-Commerce",
    results: [
      { title: "Premium e-commerce with cart and checkout" },
      { title: "Product showcase with ingredient science section" },
      { title: "Modern UI with responsive mobile-first design" },
    ],
    link: "https://www.nutrilux.ba",
    image: nutriluxImage,
  },
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
    company: "Adastra Digital",
    year: "2025",
    title: "20 Day Retreat Programme Website",
    results: [
      { title: "Full-stack Next.js app with Stripe payments & applications" },
      { title: "Admin panel for content, applicants, and testimonials" },
      { title: "Dark editorial design with parallax hero and animated reveals" },
    ],
    link: "https://20dayretreat.com",
    image: retreatImage,
  },
  {
    company: "Community",
    year: "2025",
    title: "Osijek Khutbah Live Translator",
    results: [
      { title: "Live khutbah translation for attendees" },
      { title: "React UI with real-time Supabase sync" },
      { title: "OpenAI-powered multi-language translations" },
    ],
    link: "https://osijekhutba.vercel.app",
    image: osijekKhutbahImage,
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
                ) : (
                  <div className="border border-white/15 text-white/70 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Private Product</span>
                  </div>
                )}
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        ))}

      </div>
      <div className="flex flex-col pt-24 pb-30 items-center">
        <SectionHeader eyebrow="Explore More" title="See more on GitHub" description="Message me for access to private projects" />
        <a href="https://github.com/iamelmirr" target="_blank" className="bg-white text-gray-950 h-12 w-max px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-12 hover:opacity-60 transition"><span>GitHub</span> <ArrowUpRightIcon className="size-4" /></a>
      </div>
    </div>

  </section>;
};
