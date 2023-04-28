import React, { useEffect, useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link';
import Head from 'next/head';
import { redirect, useRouter } from 'next/navigation';
import Footer from './Footer';

export default function Container(props) {
    const { children, ...customMeta } = props;
    const meta = {
        title: 'Zigzag Hacks',
        description: ``,
        type: 'website',
        ...customMeta,
      };
  return (
      <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <div className='sm:hidden'>
    {/* <MobileMenu/> */}
    </div>
    
    <div className="flex fixed flex-col justify-center text-white bg-black w-full ">
      <nav className="flex top-0 left-0 right-0 fixed items-center justify-between w-full bg-black px-10 pt-5 pb-2 sm:pb-3">
        {/* <div className='max-w-7xl'> */}
          <div className='flex flex-row items-center'>
              <NextImage width={40} height={40} src={'/logo.svg'} alt={'bg'}/> 
              <NextLink className='textNavName mx-3 text-3xl' href="/">ZIGZAG Hacks</NextLink>
          </div>
          <div className='flex flex-row gap-5 items-center '>
            {/* <NextLink className='textNav text-3xl' href={''}>Home</NextLink> */}
            <NextLink className='textNav text-3xl' href={'/#about'}>About</NextLink>
            <NextLink className='textNav text-3xl' href={''}>Register</NextLink>
          </div>
        {/* </div> */}
      </nav>
    </div>
    <main className="flex flex-col px-8  bg-black">
      {children}
      <Footer />
    </main>
    </>
  
  )
}
