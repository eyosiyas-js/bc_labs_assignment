import Image from 'next/image'
import Header from './components/header'
import Intro from './components/intro'
import CryptoBox from './components/cryptoBox'
import SwapToken from './components/swapToken'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#000000]">
      <div className="absolute container mx-auto">
        <div className="relative w-full h-0 pb-[50%]">
          <Image
            src="/home.jpg"
            alt="Next.js Logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="z-10  max-w-6xl pb-60 font-mono text-sm w-full  ">
        <Header />
        <div className="mt-[90px] max-sm:w-full ">
          <Intro />
        </div>
        <div className="mt-[90px] max-sm:w-full ">
          <CryptoBox />
        </div>
        <div className="mt-[90px] w-full ">
          <SwapToken />
        </div>
      </div>
    </main>
  )
}
