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
      <div className="bg-[url('/zigzag.svg')] bg-cover bg-center">
    <Head>
      <title>{meta.title}</title>
    </Head>
    <div className='sm:hidden'>
    {/* <MobileMenu/> */}
    </div>
    
    <div className="flex flex-col justify-center mx-2">
      <nav className="flex items-center justify-between w-full  max-w-7xl border-gray-200 dark:border-gray-700 mx-auto pt-5 pb-2 sm:pb-3 bg-white  dark:bg-mainDarkBackground bg-opacity-60 dark:text-gray-100">
          <div className='flex flex-row items-center'>
            <NextLink className='text-black text-xl dark:text-white' href="/">Zigzag Hacks</NextLink>
          </div>
          <div className='flex flex-row gap-5 items-center'>
          {/* hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] */}
          <NextLink href={''}>Home</NextLink>
          <NextLink href={''}>About</NextLink>
          <NextLink href={''}>Register</NextLink>
          </div>
      </nav>
    </div>
    <main className="flex flex-col px-8  ">
      {children}
    </main>
    </div>
  
  )
}
