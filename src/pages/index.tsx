import NextImage from 'next/image'
import Container from '@/components/Container'
import { useState } from 'react';

export default function Home() {
  return (
    <>

    <Container>
      {/* #2962ff */}
      {/* bg-gradient-to-b from-[#2962ff] to-green-950 */}
      <div className="max-w-7xl px-4 ">
        <div className="flex w-full py-6 md:py-12">
          <div className='flex w-1/2 items-start justify-center mt-20'>
            <h1 className="text-[8rem] font-bold text-gray-900">ZigZag</h1>
          </div>
          <div className="flex w-1/2 items-end justify-end self-end mt-40">
            <NextImage width={250} height={250} src={'/logo.svg'} alt={'logo'}/>
          </div>
        </div>
      </div>

    </Container>
    </>
  )
}
