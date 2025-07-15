"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from '../data/music_courses.json'
import Link from "next/link";

import { img } from "framer-motion/client";

interface Course{
          
  id: number, 
  title: string, 
  slug: string, 
  description: string, 
  price: number, 
  instructor: string, 
  isFeatured: boolean, 
  image: string 
}



const Cardssection = () => {
    const featuredData=courseData.courses.filter((course:Course)=>course.isFeatured);
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                  <h2 className='uppercase font-semibold text-teal-600 tracking-wide'>Featured Section</h2>
                  <p className=''>Learn From The Best</p>
            </div>

            <div className="mt-10 mx-6">
                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mx-auto'>
                      {featuredData.map((course: Course) => (
                                 
                            <div key={course.id} className='flex flex-col justify-center items-center m-1'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900" >
                                    <div className='flex flex-col items-center text-center'>
                                        <h2 className='font-bold text-xl'>{course.title}</h2>
                                        <p className='mt-6 mb-4 '>{course.description}</p>
                                        <p>{course.instructor}</p>
                                        <p>₹{course.price}</p>
                                        <Link href={`/courses/${course.id}`}>
                                             <p className='mt-4 border-4 bg-white text-black w-30 h-10 '>Learn More</p>
                                        </Link>
                                    </div>
                               </BackgroundGradient>
                               
                            </div>
                    ))}

                 </div>
            </div>

            <div className='mt-20 text-center'>
                <Link href={'/courses'}>
                       View All Courses
                </Link>
            </div>
       </div>
      
    </div>
  )
}

export default Cardssection
