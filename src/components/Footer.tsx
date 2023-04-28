import Link from 'next/link';
import Image from 'next/image';



export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center max-w-7xl mx-auto w-full mb-8">
  <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-6" />
  <div className="w-full max-w-7xl grid grid-cols-1 gap-4 sm:grid-cols-3 sm:text-sm sm:space-y-2">
    <div className="flex flex-col space-y-4 justify-center items-center">
      <Link
        href="/#about"
        className="text-[#BEBCAD] text-xl sm:text-base font-extrabold hover:text-gray-600 transition"
      >
        About
      </Link>
    </div>
    <div className="flex flex-col space-y-4 justify-center items-center">
        <Image width={120} height={120} src={'/logo.svg'} alt={'bg'}/> 
        <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/alex-riabov-v/" className="text-[#BEBCAD] text-sm sm:text-base font-extrabold hover:text-gray-600 transition">
            @2023 Alex-RV
        </Link>
    </div>
    <div className="flex flex-col space-y-4 justify-center items-center">
      <Link
        href="/projects"
        className="text-[#BEBCAD] text-xl sm:text-base font-extrabold hover:text-gray-600 transition"
      >
        Register
      </Link>
    </div>
  </div>
</footer>

  );
}
