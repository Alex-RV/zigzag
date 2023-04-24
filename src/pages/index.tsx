import NextImage from 'next/image'
import { Inter } from 'next/font/google'
import Container from '@/components/Container'
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
    <style>{`
    		body {
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom right, #00595c, #004d4f, #00404c, #00334a, #002642);
          overflow: hidden;
        }
    
        .triangle {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 50px solid #fff;
          }
          .triangle:nth-of-type(1) {
          top: 30%;
          left: 10%;
          animation-delay: -1s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          .triangle:nth-of-type(2) {
          top: 20%;
          left: 40%;
          animation-delay: -2s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          .triangle:nth-of-type(3) {
          top: 45%;
          left: 60%;
          animation-delay: -3s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          .triangle:nth-of-type(4) {
          top: 60%;
          left: 25%;
          animation-delay: -4s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          .triangle:nth-of-type(5) {
          top: 75%;
          left: 50%;
          animation-delay: -5s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          .triangle:nth-of-type(6) {
          top: 45%;
          left: 80%;
          animation-delay: -6s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          .triangle:nth-of-type(7) {
          top: 10%;
          left: 90%;
          animation-delay: -7s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          .triangle:nth-of-type(8) {
          top: 80%;
          left: 30%;
          animation-delay: -8s;
          transform: translate(-50%, -50%) rotate(60deg);
          }
          @keyframes float {
          0% {
          transform: translateY(0);
          }
          50% {
          transform: translateY(-20px);
          }
          100% {
          transform: translateY(0);
          }
        }
        
    `}</style>

  

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
