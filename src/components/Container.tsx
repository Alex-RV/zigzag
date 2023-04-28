import React, { useEffect, useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link';
import Head from 'next/head';
import { redirect, useRouter } from 'next/navigation';

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
      <nav className="flex top-0 left-0 right-0 fixed items-center justify-between w-full bg-black  max-w-7xl pl-8  pt-5 pb-2 sm:pb-3">
          <div className='flex flex-row items-center'>
            <NextImage width={40} height={40} src={'/logo.svg'} alt={'bg'}/> 
            <NextLink className=' mx-3 text-xl dark:text-white' href="/">ZIGZAG Hacks</NextLink>
          </div>
          <div className='flex flex-row gap-5 items-center '>
          {/* hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] */}
          <NextLink className='' href={''}>Home</NextLink>
          <NextLink href={''}>About</NextLink>
          <NextLink href={''}>Register</NextLink>
          </div>
      </nav>
    </div>
    <main className="flex flex-col px-8  bg-black">
      {children}
    </main>
    </>
  
  )
}
