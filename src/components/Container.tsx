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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{meta.title}</title>
    </Head>
    <div className="flex fixed flex-col justify-center text-white bg-black w-full z-10">
    <nav className="flex top-0 left-0 right-0 fixed items-center justify-between w-full bg-black px-5 sm:px-10 pt-4 sm:pt-5 pb-2 sm:pb-3">
      <div className="flex flex-row items-center">
        <NextLink href="/">
          <NextImage width={40} height={40} src={"/logo.svg"} alt={"logo"} />
        </NextLink>
        <NextLink className="textNavName mx-3 text-xl sm:text-3xl hidden sm:block" href="/">
          ZIGZAG Hacks
        </NextLink>

      </div>
      <div className="flex flex-row gap-4 sm:gap-5 items-center sm:tracking-[0.15rem]">
        <NextLink className="textNav text-lg sm:text-3xl" href={"/#about"}>
          About
        </NextLink>
        <NextLink className="textNav text-lg sm:text-3xl" href={"/#schedule"}>
          Schedule
        </NextLink>
        <NextLink className="textNav text-lg sm:text-3xl" href={""}>
          Register
        </NextLink>
      </div>
    </nav>
    </div>
    <main className="flex flex-col px-4 sm:px-8 bg-black">
      {children}
      <Footer />
    </main>
    </>
  )
}
