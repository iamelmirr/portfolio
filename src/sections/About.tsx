"use client"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import TypeScriptIcon from "@/assets/icons/typescript-svgrepo-com.svg"
import NextJsIcon from "@/assets/icons/next-dot-js-svgrepo-com.svg"
import SupabaseIcon from "@/assets/icons/supabase-icon.svg"
import SqlIcon from "@/assets/icons/sql-database-generic-svgrepo-com.svg"
import TailwindIcon from "@/assets/icons/tailwindcss.svg"
import NodeJsIcon from "@/assets/icons/nodejs.svg"
import PythonIcon from "@/assets/icons/python.svg"
import FirebaseIcon from "@/assets/icons/firebase.svg"
import DotNetIcon from "@/assets/icons/dotnet.svg"
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import smileEmoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Next.js',
    iconType: NextJsIcon,
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon,
  },
  {
    title: 'Node.js',
    iconType: NodeJsIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: '.NET',
    iconType: DotNetIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'Supabase',
    iconType: SupabaseIcon,
  },
  {
    title: 'Firebase',
    iconType: FirebaseIcon,
  },
  {
    title: 'SQL',
    iconType: SqlIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },


];


const hobbies = [
  {
    title: 'Football',
    emoji: '⚽',
    left: '5%',
    top: '5%',
  },

  {
    title: 'Gaming',
    emoji: '🎮',
    left: '50%',
    top: '5%',
  },





  {
    title: 'Hiking',
    emoji: '🥾',
    left: '70%',
    top: '45%',
  },

  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '35%',
    top: '40%',
  },

  {
    title: 'Cycling',
    emoji: '🚴‍♀️',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Coding',
    emoji: '💻',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Traveling',
    emoji: '🧳',
    left: '45%',
    top: '70%',
  },

]



export const AboutSection = () => {

  const dragRef = useRef(null)

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">

        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-5 lg:col-span-3">
              <CardHeader className="" title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." />

              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-right [animation-duration:15s]" className="mt-6" />

            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />

              <div className="relative flex-1" ref={dragRef}
              >
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab" style={{
                      left: hobby.left,
                      top: hobby.top,
                    }} drag dragConstraints={dragRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>

                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileEmoji} alt="smiling emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>)
};
