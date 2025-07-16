import Cardssection from "@/components/Cardssection";
import HeroSection from "@/components/HeroSection"
import MovingCards from "@/components/MovingCards";
import Stickyscroll from "@/components/Stickyscroll";
import { Spotlight } from "@/components/ui/Spotlight";
import Webinar from "@/components/Webinar";
import Instructor from "@/components/Instructor"


export default function Home() {
  return (
     <main className='min-h-screen antialiased bg-grid-white/[0.02]'>
      <Spotlight
              className="-top-10 left-40 md:-top-60 md:left-20"
              fill="white"
            />
      <h1 className='text-2xl text-center text-white'></h1>
      <HeroSection/>
      <Cardssection/>
      <Stickyscroll/>
      <MovingCards/>
      <Webinar/>
      <Instructor/>
     </main>
  );
}
 
