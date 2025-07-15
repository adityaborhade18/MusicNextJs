'use client'

import React from 'react'

import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

 const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const Webinar = () => {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className='text-teal-600 text-base uppercase tracking-wide font-semibold  '>Featured Webinar</h2>
            <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Magical Journey</h1>
        </div>



        <div className='mt-10'>
        <HoverEffect
        items={projects}
        />

        </div>


        <div  className='mt-20 text-center text-white w-40 h-14 mx-auto bg-blue-600 flex justify-center items-center rounded-2xl hover:bg-blue-700 hover:scale-103 transition duration-200' >
            <Link href={'/'}
            >
               View All Webinar
            </Link>
        </div>

      </div>
    </div>
  )
}

export default Webinar
