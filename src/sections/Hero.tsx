import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';



export const HeroSection = () => {
  return (
  
      <div id='hero' className="py-32 md:py-48 lg:py-60 lg:pt-48 relative z-0 overflow-x-clip">
        <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'> 
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <HeroOrbit rotation={-14} size={430} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-8 text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit rotation={79} size={440} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-5 text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit rotation={-41} size={520} shouldOrbit orbitDuration='34s'>
              <div className='size-2 rounded-full text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit rotation={178} size={530} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-10 text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit rotation={20} size={550} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
              <StarIcon className='size-12 text-emerald-300'/>
        </HeroOrbit>
        <HeroOrbit rotation={98} size={590} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
              <StarIcon className='size-8 text-emerald-300'/>
        </HeroOrbit>
        <HeroOrbit rotation={-5} size={650} shouldOrbit orbitDuration='42s'>
              <div className='size-2 rounded-full text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit rotation={144} size={710} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-14 text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit rotation={85} size={720} shouldOrbit orbitDuration='46s'>
              <div className='size-3 rounded-full text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit rotation={-72} size={800} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
              <StarIcon className='size-28 text-emerald-300'/>
        </HeroOrbit>
        </div>    

        <div className="container">
          <div className='flex flex-col items-center'>
          <Image className="size-[100px]" src={memojiImage} alt="Person peeking from behind laptop" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
                  <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>

        </div>
        <div className='max-w-lg mx-auto'>  
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Elmir Besirovic</h1>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-1 tracking-wide'>Software Developer</h1>
          <p className='mt-4 text-center text-white md:text-lg'>
            I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.
          </p>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <a href="#projects" className='flex z-17'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:opacity-60 z-20 transition'>
              <span className='font-semibold'>Explore My Work</span>
              <ArrowDown className='size-4'/>
            </button>
            </a>


            <a href="mailto:besirovicelmir36@gmail.com" target='_blank' className='flex z-17'>
            <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:opacity-60  z-20 transition'>
              <span>👋</span>
              <span className='font-semibold'>Let&apos;s Connect</span>
              
            </button>
            </a>

          </div>

        </div>
        
        
        </div>)
};
