import NextImage from 'next/image'
import Container from '@/components/Container'
import { useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['800'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
    {/* bg-[url('/background_wo_bg.svg')] bg-cover bg-center */}
    <Container>
      <div className="flex flex-col max-w-7xl px-4 w-full mt-14 mb-24">
        <div className='flex flex-row'>
          <div className="w-2/3 items-center justify-center flex flex-col">
            <NextImage width={1000} height={1000} src={'/bg_zigzag.svg'} alt={'bg'}/> 
            <button className='bg-[#D8DB4A] rounded-2xl  self-center text-center  transform transition duration-150 ease-in-out cursor-pointer hover:scale-105'><h1 className='textRegisterNow p-1 px-4 active:scale-95 transform transition duration-150 ease-in-out cursor-pointer '>Register now</h1></button>       
          </div>
          <div className='flex flex-col w-1/3 items-center justify-center'>
            <h1 className='textName text-8xl'>
              ZIGZAG HACKS
            </h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mx-16 w-full'>
          <div className='flex flex-col mt-12'>
            <h1 id='about' className='textAbout '>About</h1>
          </div>
          <div className='flex flex-col mt-2'>

            <div className='flex flex-col mt-10'>
              <h2 className='flex text-5xl text-[#D8DB4A]'>What is Zigzag Hacks?</h2>
              <article className='flex text-2xl text-[#BEBCAD] mt-2 ml-2'>Zigzag Hacks is a upcoming 2 day hackathon for high school students and graduating high school students. Our mission is the foster the computer science skills of the for everyone while leaving a good first impression on newcomers. Teamwork is encouraged, and anyone is invited from beginners with zero experience to advanced programmers. The first day will be entirely online while the second day is in person. Watch out! More information will follow. For questions, email us at zigzaghacks@outlook.com</article>
            </div>

            <div className='flex flex-col mt-10'>
              <h2 className='flex text-5xl text-[#D8DB4A]'>What if I can not code?</h2>
              <article className='flex text-2xl text-[#BEBCAD] mt-2 ml-2'>That is fine! You will always have peers and staff to ask for help. Additionally, we are working to create resources and guides for beginners just like you!</article>
            </div>

            <div className='flex flex-col mt-10'>
              <h2 className='flex text-5xl text-[#D8DB4A]'>What is a Hackathon?</h2>
              <article className='flex text-2xl text-[#BEBCAD] mt-2 ml-2'>A hackathon is a community event where teams of programmers and designers of all backgrounds and skill levels gather to experiment and create.</article>
            </div>

            <div className='flex flex-col mt-10'>
              <h2 className='flex text-5xl text-[#D8DB4A]'>Is it free?</h2>
              <article className='flex text-2xl text-[#BEBCAD] mt-2 ml-2'>Yes, of course! Food, admission, everything will be free!</article>
            </div>
            
            <div className='flex flex-col mt-10'>
              <h2 className='flex text-5xl text-[#D8DB4A]'>When and Where?</h2>
              <article className='flex text-2xl text-[#BEBCAD] mt-2 ml-2'>The event will begin on June 25th, 2023, and the second day will be held in the San Francisco Main Library&rsquo;s Latino Room. You can find more details in the schedule below.</article>
            </div>
          </div>

        </div>
      </div>

    </Container>
    </>
  )
}
