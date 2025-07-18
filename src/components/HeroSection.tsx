import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center
     justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
     
       <div className='p-4 relative z-10 w-full text-center text-white'>
           <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold 
             bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master The Art Of Music</h1>
           <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 
           max-w-lg mx-auto'>Dive into our comprhensive music courses and discover the secrets of music production, composition, and performance.</p>
           <div className='mt-4'>
              <Link href={'/courses'}>
                 
                  <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Explore Courses
                  </Button>
                  
              </Link>
           </div>
       </div>
    </div>
  )
}

export default HeroSection
